'use client'

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import useTranslate from '@/hooks/use-translate'
import { IDoctors } from '@/types'
import Image from 'next/image'
import { FC } from 'react'

interface Props {
	doctors: IDoctors[]
}

const Doctor: FC<Props> = ({ doctors }) => {
	const t = useTranslate()

	return (
		<section id='specialists' className='py-12 px-4 sm:px-6 lg:px-8 bg-white'>
			<h2 className='text-3xl md:text-4xl font-bold text-center mb-15 text-primary'>
				{t('navlink4')}
			</h2>
			<div className='max-w-6xl mx-auto'>
				{doctors.length === 1 ? (
					<div className='flex justify-center'>
						<div className='w-full max-w-sm flex flex-col items-center gap-4 p-6 rounded-xl shadow-sm transition hover:shadow-md'>
							<Image
								src={doctors[0].image.url}
								alt={doctors[0].name}
								width={200}
								height={200}
								className='w-40 h-40 rounded-full object-cover border-4 border-white shadow-md'
							/>
							<div className='text-center'>
								<p className='text-lg font-semibold text-gray-800'>
									{doctors[0].name}
								</p>
								<p className='text-sm text-gray-500'>{doctors[0].direction}</p>
							</div>
						</div>
					</div>
				) : (
					<Carousel className='w-full'>
						<CarouselContent>
							{doctors.map((doctor, index) => (
								<CarouselItem
									key={index}
									className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 px-2'
								>
									<div className='flex flex-col items-center gap-4 p-4 rounded-xl shadow-sm transition hover:shadow-md'>
										<Image
											src={doctor.image.url}
											alt={doctor.name}
											width={200}
											height={200}
											className='w-40 h-40 rounded-full object-cover border-4 border-white shadow-md'
										/>
										<div className='text-center'>
											<p className='text-lg font-semibold text-gray-800'>
												{doctor.name}
											</p>
											<p className='text-sm text-gray-500'>
												{doctor.direction}
											</p>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className='hidden sm:block'>
							<CarouselPrevious />
							<CarouselNext />
						</div>
					</Carousel>
				)}
			</div>
		</section>
	)
}

export default Doctor
