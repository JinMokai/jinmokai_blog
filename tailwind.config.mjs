/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				codeBg: 'rgb(var(--code-bg) / 1)',
				codeTipBg: 'rgb(var(--code-bg) / .8)',
				link: 'var(--gray-9)',
				linkHover: 'var(--gray-6)',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
