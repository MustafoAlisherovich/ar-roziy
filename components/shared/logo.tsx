import { logo } from '@/constants'
import Image from 'next/image'

const Logo = () => {
	return (
		<div className='flex items-center space-x-3'>
			<Image src={logo} alt='Ar-Roziy Clinic Logo' width={100} height={100} />
		</div>
	)
}

export default Logo
