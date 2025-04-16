import Title from '@/components/shared/title'
import AboutPage from './about/page'
import DoctorsPage from './doctors/page'
import HomePage from './home/page'
import ServicesPage from './services/page'

const Page = () => {
	return (
		<>
			<HomePage />
			<Title title='biz haqimizda' />
			<AboutPage />
			<Title title='bizning xizmatlarimiz' />
			<ServicesPage />
			<Title title='bizning mutaxassislarimiz' />
			<DoctorsPage />
		</>
	)
}

export default Page
