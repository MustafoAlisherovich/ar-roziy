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
											href='tel:+998994070301'
										>
											+998 (99) 407-03-01
										</a>
										<Separator className='bg-gray-500' />
										<a
											href='tel:+998954020301'
											className='text-sm hover:text-primary hover:underline'
										>
											+998 (95) 402-03-01
										</a>
										<Separator className='bg-gray-500' />
										<a
											href='tel:+998906280301'
											className='text-sm hover:text-primary hover:underline'
										>
											+998 (90) 628-03-01
										</a>
									</div>
								</div>

								<div className='flex items-center space-x-3'>
									<Mail size={20} />
									<a
										className='text-sm hover:text-primary hover:underline'
										href='mailto:abubakr.arroziy.clinic@gmail.com'
									>
										abubakr.arroziy.clinic@gmail.com
									</a>
								</div>
								<div className='flex items-center space-x-3'>
									<MapPin size={20} />
									<span className='text-sm'>
										Qoʻqon, Chodaklik aholi punkti, 1
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
