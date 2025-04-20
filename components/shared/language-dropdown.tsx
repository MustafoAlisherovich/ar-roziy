'use client'

import { lngs } from '@/constants'
import { cn } from '@/lib/utils'
import { Languages } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const LanguageDropdown = () => {
	const { lng } = useParams()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size={'icon'} variant={'ghost'}>
					<Languages />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-40'>
				{lngs.map(item => (
					<Link href={`/${item.route}`} key={item.route}>
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
