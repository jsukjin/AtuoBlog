export const CATEGORIES = [
	{ name: 'IT', slug: 'it' },
	{ name: 'AI', slug: 'ai' },
	{ name: 'Stock', slug: 'stock' },
] as const;

export function taxonomySlug(value: string) {
	return value
		.trim()
		.toLowerCase()
		.replace(/[^\p{L}\p{N}]+/gu, '-')
		.replace(/^-|-$/g, '');
}

