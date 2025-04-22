import { getDetailedService } from '@/service/services.service'
import { LngParams } from '@/types'
import Image from 'next/image'

const SlugPage = async ({ params }: LngParams) => {
	const { slug, lng } = params

	const service = await getDetailedService(lng, slug)

	return (
		<div className='max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-10'>
			<h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary'>
				{service.title}
			</h1>

			<Image
				src={service.image.url}
				alt={service.title}
				width={800}
				height={400}
				className='rounded-xl mb-6 w-full h-auto object-cover'
			/>

			<div
				className='prose max-w-none'
				dangerouslySetInnerHTML={{ __html: service.content.html }}
			/>

			<div className='mt-12 border-t pt-6 text-center text-sm text-muted-foreground'>
				<p className='mb-2 italic'>
					<strong>ar-roziy.uz</strong>
				</p>
			</div>
		</div>
	)
}

export default SlugPage
