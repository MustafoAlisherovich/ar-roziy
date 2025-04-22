'use client'

import { NavLinks } from '@/constants'
import useTranslate from '@/hooks/use-translate'
import { AlignCenter, FacebookIcon, InstagramIcon, Phone } from 'lucide-react'
import { useState } from 'react'
import { VisuallyHidden } from 'react-aria'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '../ui/sheet'
import LanguageDropdown from './language-dropdown'
import Logo from './logo'

const Mobile = () => {
	const t = useTranslate()
	const [open, setOpen] = useState(false)

	const handleNavClick = (hashId: string) => {
		setOpen(false)
		setTimeout(() => {
			const el = document.querySelector(hashId)
			if (el) {
				el.scrollIntoView({ behavior: 'smooth' })
			}
		}, 300) // Sheet animatsiyasi tugaguncha kutamiz
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger asChild className='md:hidden'>
				<Button size={'icon'} variant={'ghost'}>
					<AlignCenter />
				</Button>
			</SheetTrigger>
			<SheetContent side={'top'}>
				<VisuallyHidden>
					<SheetTitle>Menu</SheetTitle>
				</VisuallyHidden>
				<SheetHeader>
					<Logo />
					<Separator />
				</SheetHeader>
				<div className='mt-4 flex flex-col space-y-3'>
					{NavLinks.map(nav => (
						<button
							key={nav.href}
							onClick={() => handleNavClick(`${t(nav.href)}`)}
							className='flex h-12 cursor-pointer items-center gap-2 rounded-sm px-3 transition-colors hover:bg-primary-foreground text-left'
						>
							{t(nav.name)}
						</button>
					))}
					<LanguageDropdown isMobile />
					<div className='flex items-center justify-center gap-4'>
						<Button size='icon' variant='ghost'>
							<a href='tel:+998901234567'>
								<Phone />
							</a>
						</Button>
						<Button size='icon' variant='ghost'>
							<a href='https://www.instagram.com/ar.roziy_clinic'>
								<InstagramIcon />
							</a>
						</Button>
						<Button size='icon' variant='ghost'>
							<a href='https://www.facebook.com/arroziy.clinic'>
								<FacebookIcon />
							</a>
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default Mobile
