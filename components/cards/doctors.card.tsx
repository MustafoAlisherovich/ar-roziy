import { IDoctors } from '@/types'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'

interface Props {
	doctors: IDoctors
}

const DoctorsCard = ({ doctors }: Props) => {
	return (
		<Card className='w-64 overflow-hidden rounded-2xl shadow-md'>
			<Image
				src={doctors.image}
				alt={`${doctors.firstName} ${doctors.lastName}`}
				className='w-full h-60 object-cover'
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
	)
}
export default DoctorsCard
