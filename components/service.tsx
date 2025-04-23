/* eslint-disable @next/next/no-img-element */
import { IService } from '@/types'
import Link from 'next/link'
import { Card, CardHeader, CardTitle } from './ui/card'

interface Props {
	services: IService[]
}

const Service = ({ services }: Props) => {
	return (
		<section id='services' className='py-12 px-4 bg-white'>
			<div className='max-w-7xl mx-auto'>
				<div className='flex flex-wrap justify-center gap-8'>
					{services.map((service, index) => (
						<Link key={index} href={`/service/${service.slug}`}>
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
					))}
				</div>
			</div>
		</section>
	)
}

export default Service
