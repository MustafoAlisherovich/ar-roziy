import ContactForm from '@/components/forms/contactForm'
import { Mail, Phone } from 'lucide-react'

const ContactPage = () => {
	return (
		<div className='max-w-6xl mx-auto'>
			<div className='grid grid-cols-2 max-md:grid-cols-1 gap-4 mt-6'>
				<div className='flex flex-col'>
					<h1 className='text-4xl md:text-5xl font-poppins text-primary font-bold'>
						Aloqa
					</h1>
					<p className='mt-2 text-gray-700 text-lg leading-relaxed'>
						Men sizga yordam berish va har qanday savolga javob berish uchun shu
						yerdaman. sizdan xabar kutib qolaman
					</p>

					<div className='mt-12 flex items-center gap-3'>
						<Mail className='w-4 h-4' />
						<p className='text-sm'>info@MustafoAlisherovich</p>
					</div>
					<div className='flex items-center gap-3 mt-2'>
						<Phone className='w-4 h-4' />
						<p className='text-sm'>+98 02 296 4902</p>
					</div>
				</div>

				<div>
					<h1 className='text-4xl font-poppins text-primary font-bold mb-2'>
						Forma
					</h1>
					<ContactForm />
				</div>
			</div>
		</div>
	)
}

export default ContactPage
