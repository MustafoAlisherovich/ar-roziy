import ContactForm from '@/components/forms/contactForm'

const ContactPage = () => {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-6 mt-6'>
				<div>
					<h1 className='text-3xl font-poppins text-primary font-bold mb-2'>
						Forma
					</h1>
					<ContactForm />
				</div>
				<div className='flex flex-col'>
					<h1 className='text-3xl font-poppins text-primary font-bold'>
						Xarita
					</h1>

					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.117760111165!2d70.92693007583489!3d40.56107667141673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bae9ed3877d2a3%3A0xf918c49b9c2893b9!2sAbu%20Bakr%20Ar-Roziy%20Med%20Servis!5e0!3m2!1sen!2s!4v1745085970708!5m2!1sen!2s'
						width='550'
						height='410'
						loading='lazy'
						className='rounded-md shadow-lg mt-5'
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default ContactPage
