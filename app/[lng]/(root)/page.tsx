import Title from '@/components/shared/title'
import { translation } from '@/i18n/server'
import { LngParams } from '@/types'
import AboutPage from './about/page'
import ContactPage from './contact/page'
import DoctorsPage from './doctors/page'
import HomePage from './home/page'
import ServicesPage from './services/page'

const Page = async ({ params: { lng } }: LngParams) => {
	const { t } = await translation(lng)

	return (
		<>
			<HomePage />
			<Title title={t('navlink2')} />
			<AboutPage />
			<Title title={t('navlink3')} />
			<ServicesPage />
			<Title title={t('navlink4')} />
			<DoctorsPage />
			<Title title={t('navlink5')} />
			<ContactPage />
		</>
	)
}

export default Page
