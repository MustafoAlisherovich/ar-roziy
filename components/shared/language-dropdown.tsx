'use client'

import { lngs } from '@/constants'
import { cn } from '@/lib/utils'
import { Languages } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

interface Props {
	isMobile?: boolean
}

const LanguageDropdown = ({ isMobile = false }: Props) => {
	const { lng } = useParams()
	const pathname = usePathname()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size={'icon'}
					variant={'ghost'}
					className={cn(isMobile && 'w-full hover:bg-primary/80 h-12')}
				>
					<Languages />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-40'>
				{lngs.map(item => (
					<Link href={`/${item.route}/${pathname.slice(4)}`} key={item.route}>
						<DropdownMenuItem
							className={cn(
								'cursor-pointer',
								lng === item.route && 'bg-secondary'
							)}
						>
							<Image
								src={`/locales/${item.route}.png`}
								alt={item.label}
								width={30}
								height={30}
							/>
							<span className='ml-2 font-poppins font-medium'>
								{item.label}
							</span>
						</DropdownMenuItem>
					</Link>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageDropdown
