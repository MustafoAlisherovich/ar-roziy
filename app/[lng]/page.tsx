import About from '@/components/about'
import Contact from '@/components/contact'
import Doctor from '@/components/doctor'
import HeroPage from '@/components/hero'
import Testimonial from '@/components/testimonal'
import { getBlogs } from '@/service/blog.service'
import { getDoctors } from '@/service/doctors.service'
import { getServices } from '@/service/services.service'
import { getTestimonials } from '@/service/testimonial.service'
import { LngParams } from '@/types'
import BlogsPage from './blogs/page'
import ServicesPage from './services/page'

const Page = async ({ params }: LngParams) => {
	const { lng } = await params

	const testimonials = await getTestimonials(lng)
	const doctors = await getDoctors(lng)
	const blog = await getBlogs(lng)
	const service = await getServices(lng)

	return (
		<>
			<HeroPage />
			<About />
			<ServicesPage service={service} />
			<Doctor doctors={doctors} />
			<Testimonial testimonials={testimonials} />
			<BlogsPage blog={blog} />
			<Contact />
		</>
	)
}

export default Page
