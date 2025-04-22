import { getBlogs } from '@/service/blog.service'
import { getDoctors } from '@/service/doctors.service'
import { getServices } from '@/service/services.service'
import { getTestimonials } from '@/service/testimonial.service'
import { LngParams } from '@/types'
import BlogsPage from '../blogs/page'
import ServicesPage from '../services/page'
import AboutPage from './about/page'
import ContactPage from './contact/page'
import DoctorsPage from './doctors/page'
import HomePage from './home/page'
import TestimonialsPage from './testimonials/page'

const Page = async ({ params }: LngParams) => {
	const { lng } = params

	const testimonials = await getTestimonials(lng)
	const doctors = await getDoctors(lng)
	const blog = await getBlogs(lng)
	const service = await getServices(lng)

	return (
		<>
			<HomePage />
			<AboutPage />
			<ServicesPage service={service} />
			<DoctorsPage doctors={doctors} />
			<TestimonialsPage testimonials={testimonials} />
			<BlogsPage blog={blog} />
			<ContactPage />
		</>
	)
}

export default Page
