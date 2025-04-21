import ShareButtons from '@/components/shared/share-button'
import { translation } from '@/i18n/server'
import { getReadingTime } from '@/lib/utils'
import { getDetailedBlog } from '@/service/blog.service'
import { LngParams } from '@/types'
import { format } from 'date-fns'
import parse from 'html-react-parser'
import { CalendarDays, Clock, Minus } from 'lucide-react'
import Image from 'next/image'

const SlugPage = async ({ params }: LngParams) => {
	const { slug, lng } = params

	const blog = await getDetailedBlog(slug, lng)
	const { t } = await translation(lng)

	return (
		<div className='pt-[15vh] max-w-5xl mx-auto'>
			<h1 className='lg:text-6xl md:text-5xl text-4xl font-poppins font-semibold'>
				{blog.title}
			</h1>

			<div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4'>
				<div className='flex items-center gap-2'>
					<Clock className='w-5 h-5' />
					<p>
						{getReadingTime(blog.content.html)} {t('read')}
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
				alt='alt'
				width={`1120`}
				height={`595`}
				className='mt-4 rounded-md'
			/>

			<div className='flex md:gap-12 max-md:flex-col-reverse mt-12 relative'>
				<div className='flex flex-col space-y-3'>
					<div className='sticky top-36'>
						<p className='text-lg uppercase text-muted-foreground'>
							{t('share')}
						</p>
						<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
							<ShareButtons slug={slug} title={blog.title} lng={lng} />
						</div>
					</div>
				</div>
				<div className='flex-1 prose'>{parse(blog.content.html)}</div>
			</div>
			<div className='mt-12 border-t pt-6 text-center text-sm text-muted-foreground'>
				<p className='mb-2 italic'>
					<strong>ar-roziy.uz</strong>
				</p>
			</div>
		</div>
	)
}

export default SlugPage
