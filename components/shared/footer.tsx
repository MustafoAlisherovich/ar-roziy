import { NavLinks } from '@/constants'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import LogoFooter from './logoFooter'

const Footer = () => {
	return (
		<>
			<div className=' pt-12 mt-20 bg-secondary max-md:px-4'>
				<div className='container mx-auto max-w-7xl pb-12'>
					<div className='grid grid-cols-1 gap-12 md:grid-cols-4'>
						<div className='flex flex-col space-y-3 md:col-span-2'>
							<LogoFooter />
							<p>
								Sog&apos;lig&apos;ingiz va farovonligimiz bizning ustuvor
								vazifamiz. Ishonchli xususiy amaliyot sifatida biz zamonaviy va
								qulay muhitda shaxsiylashtirilgan, shafqatli yordamni taklif
								etamiz. Bizning yuqori malakali tibbiy mutaxassislar jamoasi
								sizning noyob ehtiyojlaringizga moslashtirilgan eng yaxshi
								davolanishni ta&apos;minlashga intiladi.
							</p>
						</div>

						<div className='flex flex-col space-y-3'>
							<h1 className='font-semibold font-poppins text-3xl'>Sahifalar</h1>
							<div className='flex flex-col space-y-3 pt-6'>
								{NavLinks.map(nav => (
									<Link
										key={nav.name}
										href={nav.href}
										className='py-2 px-3 hover:bg-sidebar-primary-foreground hover:text-primary'
									>
										{nav.name}
									</Link>
								))}
							</div>
						</div>

						<div className='flex flex-col space-y-3'>
							<h1 className='font-semibold text-3xl font-poppins'>Aloqa</h1>
							<div className='flex flex-col space-y-3 pt-6'>
								<div className='flex items-center space-x-3'>
									<PhoneCall size={20} />
									<div className='flex flex-col space-y-1'>
										<a
											className='text-sm hover:text-primary hover:underline'
											href='tel:+998901234567'
										>
											+998 (90) 123-45-67
										</a>
										<Separator className='bg-gray-500' />
										<a
											href='tel:+998911554995'
											className='text-sm hover:text-primary hover:underline'
										>
											+998 (90) 155-49-95
										</a>
									</div>
								</div>

								<div className='flex items-center space-x-3'>
									<Mail size={20} />
									<a
										className='text-sm hover:text-primary hover:underline'
										href='mailto:mustafoalisherovic@gmail.com'
									>
										mustafoalisherovic@gmail.com
									</a>
								</div>
								<div className='flex items-center space-x-3'>
									<MapPin size={20} />
									<span className='text-sm'>Kokand Farobiy-9 14</span>
								</div>
							</div>
						</div>
					</div>
					<div className='pt-12'>
						<Separator className='bg-gray-500' />
						<p>© {new Date().getFullYear()}. Barcha huquqlar himoyalangan</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
