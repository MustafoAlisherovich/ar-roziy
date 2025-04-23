import { redirect } from 'next/navigation'

export default function BlogRedirectPage({
	params,
}: {
	params: { lng: string }
}) {
	redirect(`/${params.lng}`)
}
