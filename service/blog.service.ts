import { IBlog } from '@/types'
import { gql, request } from 'graphql-request'
import { cache } from 'react'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getBlogs = async (locale: string) => {
	const query = gql`
		query GetBlogs($locale: [Locale!]!) {
			blogs(locales: $locale) {
				title
				createdAt
				description
				image {
					url
				}
				content {
					html
				}
				slug
			}
		}
	`

	const { blogs } = await request<{ blogs: IBlog[] }>(graphqlAPI, query, {
		locale: [locale, 'uz'],
	})

	return blogs
}

export const getDetailedBlog = cache(async (slug: string, locale: string) => {
	const query = gql`
		query GetDetailedBlog($slug: String!, $locale: [Locale!]!) {
			blog(locales: $locale, where: { slug: $slug }) {
				content {
					html
				}
				createdAt
				image {
					url
				}
				title
			}
		}
	`

	const { blog } = await request<{ blog: IBlog }>(graphqlAPI, query, {
		slug,
		locale: [locale, 'uz'],
	})

	return blog
})
