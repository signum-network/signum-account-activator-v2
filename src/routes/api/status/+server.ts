import { messageResponse } from '$lib/server/messageResponse';
export function GET() {
	return new Response(messageResponse('[V2] - Running fine...'));
}
