import BlogCard from '@/components/cards/blog.card'
import Title from '@/components/shared/title'
import { blogs } from '@/constants'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'
import { Dot, Home } from 'lucide-react'
import Link from 'next/link'

const BlogsPage = async ({ params: { lng } }: LngParams) => {
	const { t } = await translation(lng)

	return (
		<div className='max-w-6xl mx-auto'>
			<div className='relative min-h-[40vh] flex items-center justify-end flex-col'>
				<Title title={t('blogs')} />
				<div className='flex gap-1 items-center mt-4'>
					<Home className='w-4 h-4' />
					<Link
						href={'/'}
						className='opacity-90 hover:underline hover:opacity-100'
					>
						{t('navlink1')}
					</Link>
					<Dot />
					<p className='text-muted-foreground'>{t('blogs')}</p>
				</div>
			</div>

			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24 mt-24'>
				{blogs.map(blog => (
					<BlogCard key={blog.title} {...blog} isVertical />
				))}
			</div>
		</div>
	)
}

export default BlogsPage
