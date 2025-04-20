import createMiddleware from 'next-intl/middleware'

const intlMiddleware = createMiddleware({
	locales: ['uz', 'ru'],
	defaultLocale: 'uz',
})

export default intlMiddleware

export const config = {
	matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
