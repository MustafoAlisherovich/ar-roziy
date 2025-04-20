'use client'

import UseTranslate from '@/hooks/use-translate'
import Image from 'next/image'

const AboutPage = () => {
	const t = UseTranslate()

	return (
		<>
			<section id='about' className='py-20 px-4 bg-white'>
				<div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10'>
					{/* Text */}

					<div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
						<h2 className='text-4xl md:text-5xl font-bold text-primary font-poppins'>
							{t('aboutTitle')}
						</h2>
						<p className='text-gray-700 text-lg leading-relaxed'>
							{t('aboutDescription')}
						</p>
					</div>

					{/* Image */}
					<div className='w-full lg:w-1/2'>
						<Image
							src='/assets/img1.jpg'
							alt='Med Servis binosi'
							className='rounded-xl shadow-md w-full h-auto object-cover'
							width={500}
							height={500}
						/>
					</div>
				</div>
			</section>

			<section className='py-16 px-4 bg-white'>
				<div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10'>
					{/* Image */}
					<div className='w-full lg:w-1/2'>
						<Image
							src='/assets/img2.jpg'
							alt='Med Servis binosi'
							className='rounded-xl shadow-md w-full h-auto object-cover'
							width={500}
							height={500}
						/>
					</div>

					{/* Text */}
					<div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
						<h2 className='text-4xl md:text-5xl font-bold text-primary font-poppins'>
							{t('about2Title')}
						</h2>
						<p className='text-gray-700 text-lg leading-relaxed'>
							{t('about2Description')}
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutPage
