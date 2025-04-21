'use client'

import BlogCard from '@/components/cards/blog.card'
import { IBlog } from '@/types'

interface Props {
	blog: IBlog[]
}

const BlogsPage = ({ blog }: Props) => {
	return (
		<section id='blogs' className='py-12'>
			<div className='max-w-6xl mx-auto'>
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
