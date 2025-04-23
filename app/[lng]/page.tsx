import About from '@/components/about'
import Blog from '@/components/blog'
import Contact from '@/components/contact'
import Doctor from '@/components/doctor'
import HeroPage from '@/components/hero'
import Service from '@/components/service'
import Testimonial from '@/components/testimonal'
import { getBlogs } from '@/service/blog.service'
import { getDoctors } from '@/service/doctors.service'
import { getServices } from '@/service/services.service'
import { getTestimonials } from '@/service/testimonial.service'
import { LngParams } from '@/types'

const Page = async ({ params }: LngParams) => {
	const { lng } = await params

	const testimonials = await getTestimonials(lng)
	const doctors = await getDoctors(lng)
	const blogs = await getBlogs(lng)
	const services = await getServices(lng)

	return (
		<>
			<HeroPage />
			<About />
			<Service services={services} />
			<Doctor doctors={doctors} />
			<Testimonial testimonials={testimonials} />
			<Blog blogs={blogs} />
			<Contact />
		</>
	)
}

export default Page
