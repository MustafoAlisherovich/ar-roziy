'use client'

import BlogCard from '@/components/cards/blog.card'
import useTranslate from '@/hooks/use-translate'
import { IBlog } from '@/types'

interface Props {
	blog: IBlog[]
}

const BlogsPage = ({ blog }: Props) => {
	const t = useTranslate()

	return (
		<section id='blogs' className='py-12'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-15 text-primary'>
					{t('blogs')}
				</h2>
				<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24'>
					{blog.map(blog => (
						<BlogCard key={blog.title} {...blog} isVertical />
					))}
				</div>
			</div>
		</section>
	)
}

export default BlogsPage
