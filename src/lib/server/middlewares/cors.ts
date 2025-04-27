import type { Handle } from '@sveltejs/kit';

export const corsMiddleware: Handle = async ({ event, resolve }) => {
	if (event.request.method === 'OPTIONS') {
		return new Response(null, {
			status: 204,
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
				'Access-Control-Allow-Headers': '*'
			}
		});
	}
	const response = await resolve(event);

	response.headers.set('Access-Control-Allow-Origin', '*');
	response.headers.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
	response.headers.set('Access-Control-Allow-Headers', '*');

	return response;
};
