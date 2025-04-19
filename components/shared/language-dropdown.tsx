import { Languages } from 'lucide-react'
import { Button } from '../ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'

const LanguageDropdown = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size={'icon'} variant={'ghost'}>
					<Languages />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>UZ</DropdownMenuItem>
				<DropdownMenuItem>RU</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LanguageDropdown
