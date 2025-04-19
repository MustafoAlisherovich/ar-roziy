import { cn } from '@/lib/utils'
import { IBlog } from '@/types'
import { CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props extends IBlog {
	isVertical?: boolean
}

const BlogCard = (blog: Props) => {
	return (
		<Link
			href={'/'}
			className={cn(
				'grid gap-4 group',
				blog.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
			)}
		>
			<div className='relative bg-secondary rounded-md'>
				<Image
					width={650}
					height={335}
					src={blog.image}
					alt={blog.title}
					className='rounded-md w-full h-[335px] object-cover transition-transform duration-300 group-hover:-translate-y-2'
				/>
			</div>
			<div className='flex flex-col space-y-4'>
				{/* Time info */}
				<div className='flex items-center gap-4'>
					<div className='flex items-center gap-2'>
						<CalendarDays className='w-5 h-5' />
						<p>2025-08-19</p>
					</div>
					<Minus />
					<div className='flex items-center gap-2'>
						<Clock className='w-5 h-5' />
						<p>01 min read</p>
					</div>
				</div>

				{/* Title */}
				<h2 className='text-3xl max-md:text-2xl font-poppins group-hover:text-primary transition-colors font-semibold'>
					{blog.title}
				</h2>
				<p className='text-muted-foreground line-clamp-3'>{blog.description}</p>
			</div>
		</Link>
	)
}

export default BlogCard
