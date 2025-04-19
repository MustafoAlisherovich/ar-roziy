import Image from 'next/image'

const Logo = () => {
	return (
		<div className='flex items-center space-x-3'>
			<Image
				src={'/logo/logo.png'}
				alt='Ar-Roziy Clinic Logo'
				width={120}
				height={120}
			/>
		</div>
	)
}

export default Logo
