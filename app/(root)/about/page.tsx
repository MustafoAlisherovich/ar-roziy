import Image from 'next/image'

const AboutPage = () => {
	return (
		<>
			<section className='py-16 px-4 bg-white'>
				<div className='max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10'>
					{/* Text */}
					<div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
						<h2 className='text-4xl md:text-5xl font-bold text-primary font-poppins'>
							Biz nimalarga e&apos;tibor beramiz
						</h2>
						<p className='text-gray-700 text-lg leading-relaxed'>
							Ar-roziy klinikasida har bir bemorning ehtiyoji e’tiborga olinadi.
							Biz uchun bemorlarning sog‘lig‘i va ularning ishonchi muhimdir.
							Davolash jarayonlarimiz nafaqat kasallikni bartaraf etishga, balki
							hayot sifatini yaxshilashga qaratilgan.
						</p>
					</div>

					{/* Image */}
					<div className='w-full lg:w-1/2'>
						<Image
							src='/assets/img1.jpg'
							alt='Med Servis binosi'
							className='rounded-xl shadow-md w-full h-auto object-cover'
							width={500}
							height={500}
						/>
					</div>
				</div>
			</section>

			<section className='py-16 px-4 bg-white'>
				<div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10'>
					{/* Image */}
					<div className='w-full lg:w-1/2'>
						<Image
							src='/assets/img2.jpg'
							alt='Med Servis binosi'
							className='rounded-xl shadow-md w-full h-auto object-cover'
							width={500}
							height={500}
						/>
					</div>

					{/* Text */}
					<div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
						<h2 className='text-4xl md:text-5xl font-bold text-primary font-poppins'>
							Bizning maqsadimiz
						</h2>
						<p className='text-gray-700 text-lg leading-relaxed'>
							Ar-Roziy klinikasida har bir bemorning ehtiyoji e’tiborga olinadi.
							Biz uchun bemorlarning sog‘lig‘i va ularning ishonchi muhimdir.
							Davolash jarayonlarimiz nafaqat kasallikni bartaraf etishga, balki
							hayot sifatini yaxshilashga qaratilgan.
						</p>
					</div>
				</div>
			</section>
		</>
	)
}

export default AboutPage
