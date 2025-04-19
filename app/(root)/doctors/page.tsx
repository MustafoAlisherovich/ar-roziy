import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import { specialists } from '@/constants'
import Image from 'next/image'

const DoctorsPage = () => {
	return (
		<Carousel className='w-full max-w-6xl mx-auto'>
			<CarouselContent>
				{specialists.map((doctors, index) => (
					<CarouselItem key={index} className='basis-auto md:basis-1/4'>
						<div className='flex flex-col items-center gap-2 p-4'>
							<Image
								src={doctors.image}
								alt={`${doctors.firstName} ${doctors.lastName}`}
								className='w-50 h-50 rounded-full object-cover shadow'
								width={400}
								height={400}
							/>
							<div className='text-center'>
								<p className='text-lg font-semibold text-gray-800'>
									{doctors.firstName} {doctors.lastName}
								</p>
								<p className='text-sm text-gray-500'>
									{doctors.specialization}
								</p>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

export default DoctorsPage
