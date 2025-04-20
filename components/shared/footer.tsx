'use client'

import { NavLinks } from '@/constants'
import UseTranslate from '@/hooks/use-translate'
import { Mail, MapPin, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import { Separator } from '../ui/separator'
import LogoFooter from './logoFooter'

const Footer = () => {
	const t = UseTranslate()
	return (
		<>
			<div className=' pt-12 mt-20 bg-secondary max-md:px-4'>
				<div className='container mx-auto max-w-7xl pb-12'>
					<div className='grid grid-cols-1 gap-12 md:grid-cols-4'>
						<div className='flex flex-col space-y-3 md:col-span-2'>
							<LogoFooter />
							<p>{t('description')}</p>
						</div>

						<div className='flex flex-col space-y-3'>
							<h1 className='font-semibold text-primary font-poppins text-3xl'>
								{t('pages')}
							</h1>
							<div className='flex flex-col space-y-3 pt-6'>
								{NavLinks.map(nav => (
									<Link
										key={nav.name}
										href={nav.href}
										className='hover:bg-sidebar-primary-foreground hover:text-primary font-medium transition-all'
									>
										{t(nav.name)}
									</Link>
								))}
							</div>
						</div>

						<div className='flex flex-col space-y-3'>
							<h1 className='font-semibold text-3xl font-poppins text-primary'>
								{t('navlink5')}
							</h1>
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
										href='mailto:arRoziy@info.com'
									>
										arRoziy@info.com
									</a>
								</div>
								<div className='flex items-center space-x-3'>
									<MapPin size={20} />
									<span className='text-sm'>
										HW6H+CRJ, Kokand, Fergana Region, Uzbekistan
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className='pt-12'>
						<Separator className='bg-gray-500' />
						<p>
							© {new Date().getFullYear()}. {t('copyright')}
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Footer
