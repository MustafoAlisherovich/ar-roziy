import { ITestimonial } from '@/types'
import { gql, request } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getTestimonials = async (locale: string) => {
	const query = gql`
		query GetTestimonials($locale: [Locale!]!) {
			testimonials(locales: $locale) {
				name
				comment
				createdAt
				image {
					url
				}
			}
		}
	`

	const { testimonials } = await request<{ testimonials: ITestimonial[] }>(
		graphqlAPI,
		query,
		{ locale: [locale, 'uz'] }
	)

	return testimonials
}
