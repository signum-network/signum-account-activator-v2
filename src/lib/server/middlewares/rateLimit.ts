import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';
import { config } from '../config';
import type { Handle } from '@sveltejs/kit';
// Create Redis client
const redis = new Redis({
	url: config.upstash.url,
	token: config.upstash.token
});

// Create rate limiter
const ratelimit = new Ratelimit({
	redis,
	limiter: Ratelimit.slidingWindow(6, '1m'), // 2 requests per 1m minutes
	analytics: true
});

export const rateLimiMiddleware: Handle = async ({ event, resolve }) => {
	if (event.request.headers.get('x-api-key') === config.apiKey) {
		return resolve(event);
	}

	// Only rate limit API routes
	if (event.url.pathname.startsWith('/api/activate')) {
		const ip = event.getClientAddress();
		const { success, limit, remaining, reset } = await ratelimit.limit(`ratelimit_${ip}`);

		if (!success) {
			return new Response('Too many requests', {
				status: 429,
				headers: {
					'X-RateLimit-Limit': limit.toString(),
					'X-RateLimit-Remaining': remaining.toString(),
					'X-RateLimit-Reset': reset.toString()
				}
			});
		}

		const response = await resolve(event);
		const newResponse = new Response(response.body, response);
		newResponse.headers.set('X-RateLimit-Limit', limit.toString());
		newResponse.headers.set('X-RateLimit-Remaining', remaining.toString());
		newResponse.headers.set('X-RateLimit-Reset', reset.toString());

		return newResponse;
	}

	return resolve(event);
};
