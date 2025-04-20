import ContactForm from '@/components/forms/contactForm'
import Map from '@/components/map/map'

const ContactPage = async () => {
	return (
		<section id='contact' className='py-20'>
			<div className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-6'>
					<div className='flex flex-col'>
						<ContactForm />
					</div>
					<div className='flex flex-col'>
						<Map />
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactPage
