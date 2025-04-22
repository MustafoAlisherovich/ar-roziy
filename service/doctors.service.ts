import { IDoctors } from '@/types'
import { gql, request } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getDoctors = async (locale: string) => {
	const query = gql`
		query GetTestimonials($locale: [Locale!]!) {
			doctors(locales: $locale) {
				name
				direction
				image {
					url
				}
			}
		}
	`

	const { doctors } = await request<{ doctors: IDoctors[] }>(
		graphqlAPI,
		query,
		{ locale: [locale, 'uz'] }
	)

	return doctors
}
