'use client'

import useTranslate from '@/hooks/use-translate'
import { getReadingTime } from '@/lib/utils'
import { IBlog } from '@/types'
import { format } from 'date-fns'
import { CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
	blogs: IBlog[]
}

const Blog = ({ blogs }: Props) => {
	const t = useTranslate()

	return (
		<section id='blogs' className='py-12'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-15 text-primary'>
					{t('blogs')}
				</h2>
				<div className='grid grid-cols-2 max-md:grid-cols-1 gap-x-4 gap-y-24'>
					{blogs.map((blog, index) => (
						<Link href={`/blog/${blog.slug}`} key={index}>
							<div className='relative bg-secondary rounded-md'>
								<Image
									width={650}
									height={335}
									src={blog.image.url}
									alt={blog.title}
									className='rounded-md w-full h-[335px] object-cover transition-transform duration-300 group-hover:-translate-y-2'
								/>
							</div>
							<div className='flex flex-col space-y-4'>
								{/* Time info */}
								<div className='flex items-center gap-4'>
									<div className='flex items-center gap-2'>
										<CalendarDays className='w-5 h-5' />
										<p>{format(new Date(blog.createdAt), 'MMM dd yyyy')}</p>
									</div>
									<Minus />
									<div className='flex items-center gap-2'>
										<Clock className='w-5 h-5' />
										<p>
											{getReadingTime(blog.content.html)} {t('read')}
										</p>
									</div>
								</div>

								{/* Title */}
								<h2 className='text-3xl max-md:text-2xl font-poppins group-hover:text-primary transition-colors font-semibold'>
									{blog.title}
								</h2>
								<p className='text-muted-foreground line-clamp-3'>
									{blog.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	)
}

export default Blog
