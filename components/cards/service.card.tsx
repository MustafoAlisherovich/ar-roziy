'use client'

import { Card } from '@/components/ui/card'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { HeartCrack } from 'lucide-react'
import { useState } from 'react'

interface Props {
	title: string
	description: string
}

const ServiceCard = ({ title, description }: Props) => {
	const [flipped, setFlipped] = useState(false)

	return (
		<>
			<div
				className='perspective w-64 h-64 cursor-pointer'
				onMouseEnter={() => setFlipped(true)}
				onMouseLeave={() => setFlipped(false)}
			>
				<motion.div
					className='relative w-full h-full transition-transform duration-500'
					animate={{ rotateY: flipped ? 180 : 0 }}
					style={{ transformStyle: 'preserve-3d' }}
				>
					{/* Front Side */}
					<Card className='absolute w-full h-full backface-hidden flex items-center justify-center p-4'>
						<HeartCrack className='text-primary' size={50} />
						<p className='text-center text-lg font-semibold'>{title}</p>
					</Card>

					{/* Back Side */}
					<Card
						className={clsx(
							'absolute w-full h-full shadow backface-hidden rotate-y-180 flex items-center justify-center bg-primary text-white p-4'
						)}
					>
						<p className='text-center'>{description}</p>
					</Card>
				</motion.div>
			</div>
		</>
	)
}
export default ServiceCard
