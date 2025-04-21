import { IService } from '@/types'
import { gql, request } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getServices = async (locale: string) => {
	const query = gql`
		query GetServices($locale: [Locale!]!) {
			services(locales: $locale) {
				title
				icon {
					url
				}
			}
		}
	`

	const { services } = await request<{ services: IService[] }>(
		graphqlAPI,
		query,
		{ locale: [locale, 'uz'] }
	)

	return services
}
