interface Props {
	title: string
}

const Title = ({ title }: Props) => {
	return (
		<div className='flex flex-col items-center justify-center py-10'>
			<h1 className='text-3xl font-bold text-center text-primary uppercase font-poppins'>
				{title}
			</h1>
		</div>
	)
}

export default Title
