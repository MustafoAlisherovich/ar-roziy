/* eslint-disable @next/next/no-img-element */
'use client'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { IService } from '@/types'
import Link from 'next/link'

interface Props {
	service: IService[]
}

const ServicesPage = ({ service }: Props) => {
	return (
		<section id='services' className='py-12'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto py-10'>
				{service.map((service, index) => (
					<Link key={index} href={'/'}>
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
								<CardTitle className='text-base font-bold text-teal-600 uppercase tracking-wide text-center'>
									{service.title}
								</CardTitle>
							</CardHeader>
						</Card>
					</Link>
				))}
			</div>
		</section>
	)
}

export default ServicesPage
