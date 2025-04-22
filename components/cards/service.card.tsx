'use client'

/* eslint-disable @next/next/no-img-element */
import { cn } from '@/lib/utils'
import { IService } from '@/types'
import Link from 'next/link'
import { Card, CardHeader, CardTitle } from '../ui/card'

interface Props extends IService {
	isVertical?: boolean
}

const ServiceCard = (service: Props) => {
	return (
		<Link
			href={`/services/${service.slug}`}
			className={cn(
				'grid gap-4 group',
				service.isVertical ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'
			)}
		>
			<Card className='group w-64 h-60 border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer'>
				{service.icon && (
					<div className='bg-teal-50 p-5 rounded-full mb-6'>
						<img
							src={service.icon.url}
							alt={`${service.title} icon`}
							width={56}
							height={56}
							className='object-contain'
						/>
					</div>
				)}

				<CardHeader className='p-0 w-full flex flex-col items-center justify-center space-y-1'>
					<CardTitle className='text-base font-bold text-primary uppercase tracking-wide text-center'>
						{service.title}
					</CardTitle>
				</CardHeader>
			</Card>
		</Link>
	)
}

export default ServiceCard
