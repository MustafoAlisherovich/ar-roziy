import Title from '@/components/shared/title'
import { translation } from '@/i18n/server'
import { getBlogs } from '@/service/blog.service'
import { getDoctors } from '@/service/doctors.service'
import { getServices } from '@/service/services.service'
import { getTestimonials } from '@/service/testimonial.service'
import { LngParams } from '@/types'
import BlogsPage from '../blogs/page'
import AboutPage from './about/page'
import ContactPage from './contact/page'
import DoctorsPage from './doctors/page'
import HomePage from './home/page'
import ServicesPage from './services/page'
import TestimonialsPage from './testimonials/page'

const Page = async ({ params: { lng } }: LngParams) => {
	const { t } = await translation(lng)
	const testimonials = await getTestimonials(lng)
	const doctors = await getDoctors(lng)
	const blog = await getBlogs(lng)
	const service = await getServices(lng)

	return (
		<>
			<HomePage />
			<Title title={t('navlink2')} />
			<AboutPage />
			<Title title={t('navlink3')} />
			<ServicesPage service={service} />
			<Title title={t('navlink4')} />
			<DoctorsPage doctors={doctors} />
			<Title title={t('testimonials')} />
			<TestimonialsPage testimonials={testimonials} />
			<Title title={t('blogs')} />
			<BlogsPage blog={blog} />
			<Title title={t('navlink5')} />
			<ContactPage />
		</>
	)
}

export default Page
