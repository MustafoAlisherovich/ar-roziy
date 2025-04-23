// app/[lng]/blog/[slug]/page.tsx

import ShareButtons from '@/components/shared/share-button'
import { translation } from '@/i18n/server'
import { getReadingTime } from '@/lib/utils'
import { getDetailedBlog } from '@/service/blog.service'
import { format } from 'date-fns'
import parse from 'html-react-parser'
import { CalendarDays, Clock, Minus } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Params type
interface PageProps {
	params: {
		lng: string
		slug: string
	}
}

// Generate metadata
export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata | null> {
	const { lng, slug } = params
	const blog = await getDetailedBlog(slug, lng)

	if (!blog) {
		return null
	}

	return {
		title: blog.title,
		description: blog.description,
		openGraph: {
			images: blog.image.url,
			title: blog.title,
			description: blog.description,
		},
	}
}

// Default export page component
export default async function BlogSlugPage({ params }: PageProps) {
	const { lng, slug } = params
	const blog = await getDetailedBlog(slug, lng)
	const { t } = await translation(lng)

	if (!blog) return notFound()

	return (
		<div className='pt-[15vh] max-w-5xl px-4 sm:px-6 md:px-8 mx-auto'>
			<h1 className='text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold'>
				{blog.title}
			</h1>

			<div className='flex items-center flex-wrap gap-4 mt-4 justify-center sm:justify-start text-sm sm:text-base'>
				<div className='flex items-center gap-2'>
					<Clock className='w-5 h-5' />
					<p>
						{getReadingTime(blog.content?.html || '')} {t('read')}
					</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-5 h-5' />
					<p>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</p>
				</div>
			</div>

			<Image
				src={blog.image.url}
				alt={blog.title}
				width={1120}
				height={595}
				className='mt-4 rounded-md w-full h-auto object-cover'
			/>

			<div className='flex flex-col-reverse md:flex-row md:gap-12 mt-12 relative'>
				<div className='flex flex-col space-y-3 mt-8 md:mt-0'>
					<div className='sticky top-36'>
						<p className='text-lg uppercase text-muted-foreground'>
							{t('share')}
						</p>
						<div className='flex flex-row md:flex-col gap-3 mt-4'>
							<ShareButtons slug={slug} title={blog.title} lng={lng} />
						</div>
					</div>
				</div>
				<div className='flex-1 prose max-w-none'>
					{blog.content?.html ? parse(blog.content.html) : null}
				</div>
			</div>

			<div className='mt-12 border-t pt-6 text-center text-sm text-muted-foreground'>
				<p className='mb-2 italic'>
					<strong>ar-roziy.uz</strong>
				</p>
			</div>
		</div>
	)
}
