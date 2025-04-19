import { Card, CardContent } from '@/components/ui/card'
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
		<Carousel className='w-full max-w-5xl mx-auto'>
			<CarouselContent>
				{specialists.map((doctors, index) => (
					<CarouselItem key={index} className='basis-auto md:basis-1/3'>
						<Card className='w-64 overflow-hidden rounded-2xl shadow-md items-start'>
							<Image
								src={doctors.image}
								alt={`${doctors.firstName} ${doctors.lastName}`}
								className=' h-60 object-cover'
								width={256}
								height={224}
							/>
							<CardContent className='p-4'>
								<h3 className='text-lg font-semibold'>
									{doctors.firstName} {doctors.lastName}
								</h3>
								<p className='text-sm text-muted-foreground'>
									{doctors.specialization}
								</p>
							</CardContent>
						</Card>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	)
}

export default DoctorsPage
