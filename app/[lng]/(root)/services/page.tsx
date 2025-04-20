import ServiceCard from '@/components/cards/service.card'
import { serviceCards } from '@/constants'

const ServicesPage = () => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto py-10'>
			{serviceCards.map((card, index) => (
				<ServiceCard key={index} {...card} />
			))}
		</div>
	)
}

export default ServicesPage
