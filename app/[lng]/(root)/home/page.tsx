'use client'

import { Button } from '@/components/ui/button'
import UseTranslate from '@/hooks/use-translate'
import Link from 'next/link'

const HomePage = () => {
	const t = UseTranslate()

	return (
		<section
			className='relative bg-cover bg-center bg-no-repeat h-[80vh]'
			style={{ backgroundImage: "url('/assets/img3.jpg')" }}
		>
			{/* Overlay (optional, istasang olib tashlashing mumkin) */}
			<div className='absolute inset-0'></div>

			<div className='relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 max-w-4xl mx-auto space-y-6'>
				<h2 className='text-[#4CA597] text-5xl font-bold tracking-wide'>
					Abu Bakr Ar Roziy Med Servis
				</h2>

				<p className='text-lg text-gray-800 leading-relaxed'>
					{t('description')}
				</p>

				<div className='gap-4 mt-4'>
					<Link href={'#blogs'}>
						<Button
							size={'lg'}
							className='font-semibold shadow hover:shadow-md cursor-pointer'
						>
							{t('ourBlogs')}
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default HomePage
