import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { IDoctors } from '@/types'
import Image from 'next/image'

interface Props {
	doctors: IDoctors[]
}

const DoctorsPage = ({ doctors }: Props) => {
	return (
		<section id='specialists' className='py-12'>
			<Carousel className='w-full max-w-6xl mx-auto'>
				<CarouselContent>
					{doctors.map((doctors, index) => (
						<CarouselItem key={index} className='basis-auto md:basis-1/4'>
							<div className='flex flex-col items-center gap-2 p-4'>
								<Image
									src={doctors.image.url}
									alt={`${doctors.name}`}
									className='w-50 h-50 rounded-full object-cover shadow'
									width={400}
									height={400}
								/>
								<div className='text-center'>
									<p className='text-lg font-semibold text-gray-800'>
										{doctors.name}
									</p>
									<p className='text-sm text-gray-500'>{doctors.direction}</p>
								</div>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</section>
	)
}

export default DoctorsPage
