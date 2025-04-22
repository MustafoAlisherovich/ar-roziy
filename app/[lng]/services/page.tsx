'use client'

import ServiceCard from '@/components/cards/service.card'
import useTranslate from '@/hooks/use-translate'
import { IService } from '@/types'

interface Props {
	service: IService[]
}

const ServicesPage = ({ service }: Props) => {
	const t = useTranslate()

	return (
		<section id='services' className='py-12 px-4 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-12 text-primary'>
					{t('navlink3')}
				</h2>
				<div className='flex flex-wrap justify-center gap-8'>
					{service.map(service => (
						<ServiceCard key={service.title} {...service} isVertical />
					))}
				</div>
			</div>
		</section>
	)
}

export default ServicesPage
