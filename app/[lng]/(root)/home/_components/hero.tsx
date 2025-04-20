'use client'

import { Button } from '@/components/ui/button'
import UseTranslate from '@/hooks/use-translate'
import Link from 'next/link'

const Hero = () => {
	const t = UseTranslate()

	return (
		<section
			className='relative bg-cover bg-center bg-no-repeat h-[80vh]'
			style={{ backgroundImage: "url('/assets/img3.jpg')" }}
		>
			{/* Overlay (optional, istasang olib tashlashing mumkin) */}
			<div className='absolute inset-0'></div>

			<div className='relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 max-w-4xl mx-auto space-y-6'>
				<h2 className='text-[#4CA597] text-5xl font-bold tracking-wide'>
					Ar-Roziy
				</h2>

				<p className='text-lg text-gray-800 leading-relaxed'>
					Sog&apos;lig&apos;ingiz va farovonligimiz bizning ustuvor vazifamiz.
					Ishonchli xususiy amaliyot sifatida biz zamonaviy va qulay muhitda
					shaxsiylashtirilgan, shafqatli yordamni taklif etamiz. Bizning yuqori
					malakali tibbiy mutaxassislar jamoasi sizning noyob ehtiyojlaringizga
					moslashtirilgan eng yaxshi davolanishni ta&apos;minlashga intiladi.
				</p>

				<div className='gap-4 mt-4'>
					<Link href={'/blogs'}>
						<Button
							size={'lg'}
							className='font-semibold shadow hover:shadow-md'
						>
							{t('ourBlogs')}
						</Button>
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero
