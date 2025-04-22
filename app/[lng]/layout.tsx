import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { languages } from '@/i18n/settings'
import { ChildProps } from '@/types'
import { dir } from 'i18next'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	variable: '--font-poppins',
	subsets: ['latin'],
})

const inter = Inter({
	weight: ['100', '300', '400', '500', '700', '900'],
	variable: '--font-inter',
	subsets: ['latin'],
})

export async function generateStaticParams() {
	return languages.map(lng => ({ lng }))
}

export const metadata: Metadata = {
	metadataBase: new URL('https://ar-roziy.uz'),
	title: 'Ar-Roziy Clinic',
	description:
		"Abu Bakr Ar Roziy med servisi, xizmat ko'rsatish, jarrohlik va asosiysi insonlarning sog'ligi.",
	authors: [{ name: 'Ar-Roziy Klinika', url: 'https://ar-roziy.uz' }],
	icons: { icon: '/logo/headLogo.svg' },
	openGraph: {
		title: "Ar-Roziy Klinika - Qo'qondagi zamonaviy tibbiy markaz",
		description:
			"Ar-Roziy Klinika Qo'qonda yuqori sifatli diagnostika va davolash xizmatlarini taqdim etadi. Mutaxassis shifokorlar, zamonaviy uskunalar, va yuqori darajadagi xizmatlar bilan sog‘lig‘ingizni kafolatlaymiz.",
		type: 'website',
		url: 'https://ar-roziy.uz',
		locale: 'uz_UZ',
		images: '/assets/img4.jpg',
		countryName: 'Uzbekistan',
		siteName: 'Ar-Roziy',
		emails: 'abubakr.arroziy.clinic@gmail.com',
	},
	keywords:
		"Klinika, tibbiyot, shifokor, diagnostika, davolash, Qo'qon klinikalar, sog'liqni saqlash, zamonaviy tibbiyot tibbiy xizmatlar, shifokorlar, konsultatsiya, maxsus tibbiy yordam, sog'liq markazi, ar roziy, ar-roziy abu bakr ar roziy, jarrohlik, qo'qondagi eng yaxshi klinika, to'liq davolanish, Клиника, тиббиёт, шифокор, диагностика, даволаш, Қўқон клиникалари, соғлиқни сақлаш, замонавий тиббиёт, тиббий хизматлар, шифокорлар, консультация, махсус тиббий ёрдам, соғлиқ маркази, Ар Розий, Ар-Розий Абу Бакр ар-Розий, жарроҳлик, Қўқондаги энг яхши клиника, тўлиқ даволаниш Клиника, медицина, врач, диагностика, лечение, клиники Коканда, здравоохранение, современная медицина, медицинские услуги, врачи, консультация, специальная медицинская помощь, центр здоровья, Ар-Рази, Ар-Рази Абу Бакр ар-Рази, хирургия, лучшая клиника в Коканде, полное лечение",
}

interface Props extends ChildProps {
	params: { lng: string }
}

function RootLayout({ children, params }: Props) {
	const { lng } = params
	return (
		<html lang={lng} dir={dir(lng)}>
			<body className={`${inter.variable} ${poppins.variable} antialiased`}>
				<Navbar />
				{children}
				<Footer />
				<Toaster position='top-center' />
			</body>
		</html>
	)
}

export default RootLayout
