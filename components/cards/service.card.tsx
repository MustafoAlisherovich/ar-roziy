'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardHeader, CardTitle } from '../ui/card'

interface Props {
	title: string
	icon: string
}

const ServiceCard = ({ title, icon }: Props) => {
	return (
		<Link href={'/'}>
			<Card className='group w-64 h-60 border border-gray-200 rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer'>
				{icon && (
					<div className='bg-teal-50 p-5 rounded-full mb-6'>
						<Image
							src={icon}
							alt={`${title} icon`}
							width={56}
							height={56}
							className='object-contain'
						/>
					</div>
				)}

				<CardHeader className='p-0 w-full flex flex-col items-center justify-center space-y-1'>
					<CardTitle className='text-base font-bold text-teal-600 uppercase tracking-wide text-center'>
						{title}
					</CardTitle>
				</CardHeader>
			</Card>
		</Link>
	)
}
export default ServiceCard
