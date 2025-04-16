import { serviceCards } from '@/constants'
import ServiceCard from '../../../components/cards/service.card'

const ServicesPage = () => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 justify-center mx-auto max-w-7xl'>
			{serviceCards.map((card, index) => (
				<ServiceCard key={index} {...card} />
			))}
		</div>
	)
}

export default ServicesPage
