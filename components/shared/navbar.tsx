import Logo from '@/components/shared/logo'
import { NavLinks } from '@/constants'
import Link from 'next/link'

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
							<a
								key={nav.name}
								href={nav.href}
								className='py-2 px-3 hover:bg-sidebar-primary-foreground hover:text-primary'
							>
								{nav.name}
							</a>
						))}
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Navbar
