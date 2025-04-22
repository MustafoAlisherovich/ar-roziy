'use client'

import ContactForm from '@/components/forms/contactForm'
import Map from '@/components/map/map'
import useTranslate from '@/hooks/use-translate'

const ContactPage = () => {
	const t = useTranslate()

	return (
		<section id='contact' className='py-12 px-4 sm:px-6 lg:px-8 bg-white'>
			<div className='max-w-6xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold text-center mb-15 text-primary'>
					{t('navlink5')}
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
					{/* Contact Form */}
					<div className='w-full'>
						<ContactForm />
					</div>

					{/* Map */}
					<div className='w-full'>
						<Map />
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactPage
