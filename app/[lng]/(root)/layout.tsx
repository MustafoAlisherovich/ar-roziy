import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'
import { ChildProps } from '@/types'

const Layout = ({ children }: ChildProps) => {
	return (
		<main>
			<Navbar />
			<div className='container'>{children}</div>
			<Footer />
		</main>
	)
}

export default Layout
