import { sequence } from '@sveltejs/kit/hooks';
import { rateLimiMiddleware } from '$lib/server/middlewares/rateLimit';

export const handle = sequence(rateLimiMiddleware);
