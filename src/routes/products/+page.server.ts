import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function load() {
	try {
		return {};
	} catch (err: unknown) {
		const httpError = err as { status: number; message: string };
		if (httpError.message) {
			throw error(httpError.status ?? 500, httpError.message);
		}
		throw error(500, err as string);
	}
};
