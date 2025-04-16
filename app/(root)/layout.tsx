import { ChildProps } from '@/types'
import Navbar from '../../components/shared/navbar'

const Layout = ({ children }: ChildProps) => {
	return (
		<main>
			<Navbar />
			<div className='container'>{children}</div>
		</main>
	)
}

export default Layout
