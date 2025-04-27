import { sequence } from '@sveltejs/kit/hooks';
import { rateLimiMiddleware } from '$lib/server/middlewares/rateLimit';
import { corsMiddleware } from '$lib/server/middlewares/cors';

export const handle = sequence(corsMiddleware, rateLimiMiddleware);
