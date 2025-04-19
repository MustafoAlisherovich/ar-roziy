import Image from 'next/image'

const LogoFooter = () => {
	return (
		<div className='flex items-center space-x-3'>
			<Image
				src={'/logo/logo.png'}
				alt='Ar-Roziy Clinic Logo'
				width={200}
				height={200}
			/>
		</div>
	)
}

export default LogoFooter
