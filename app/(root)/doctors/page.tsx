import DoctorsCard from '@/components/cards/doctors.card'
import { specialists } from '@/constants'

const DoctorsPage = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 justify-center mx-auto max-w-7xl'>
			{specialists.map((doctor, index) => (
				<DoctorsCard key={index} doctors={doctor} />
			))}
		</div>
	)
}

export default DoctorsPage
