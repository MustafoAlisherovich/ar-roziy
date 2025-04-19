import Logo from '@/components/shared/logo'
import { NavLinks } from '@/constants'
import { FacebookIcon, InstagramIcon, Phone } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import LanguageDropdown from './language-dropdown'

const Navbar = () => {
	return (
		<header className='shadow-md bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-20'>
					{/* Logo Section */}
					<Link href={'/'}>
						<Logo />
					</Link>

					{/* Nav Links */}
					<nav className='flex space-x-8 text-gray-700 text-sm font-medium'>
						{NavLinks.map(nav => (
							<Link
								key={nav.name}
								href={nav.href}
								className='py-2 px-3 hover:bg-sidebar-primary-foreground hover:text-primary'
							>
								{nav.name}
							</Link>
						))}
					</nav>
					<div className='md:flex items-center space-x-4 hidden'>
						<LanguageDropdown />
						<Button size={'icon'} variant={'ghost'}>
							<a href='+998901234567'>
								<Phone />
							</a>
						</Button>
						<Button size={'icon'} variant={'ghost'}>
							<a href='https://www.instagram.com/ar.roziy_clinic'>
								<InstagramIcon />
							</a>
						</Button>
						<Button size={'icon'} variant={'ghost'}>
							<a href='https://www.facebook.com/arroziy.clinic'>
								<FacebookIcon />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Navbar
