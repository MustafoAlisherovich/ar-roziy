import Footer from '@/components/shared/footer'
import { ChildProps } from '@/types'
import Navbar from '../../components/shared/navbar'

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
