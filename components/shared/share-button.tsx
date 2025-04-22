// components/ShareButtons.tsx
'use client'
import { Button } from '@/components/ui/button'
import { Facebook, Link2, Linkedin, Twitter } from 'lucide-react'
import { useParams } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
	slug: string
	title: string
	lng: string
}

export default function ShareButtons({ slug, title }: Props) {
	const { lng } = useParams() as { lng?: string }

	const origin =
		typeof window !== 'undefined'
			? window.location.origin
			: 'https://ar-roziy.uz'
	const path = lng ? `/${lng}/${slug}` : `/${slug}`
	const fullUrl = `${origin}${path}`
	const encodedUrl = encodeURIComponent(fullUrl)
	const encodedTitle = encodeURIComponent(title)

	const shareUrl = {
		twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
		linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
	}

	return (
		<>
			<Button
				size='icon'
				variant='outline'
				onClick={() => window.open(shareUrl.twitter, '_blank')}
			>
				<Twitter />
			</Button>
			<Button
				size='icon'
				variant='outline'
				onClick={() => window.open(shareUrl.facebook, '_blank')}
			>
				<Facebook />
			</Button>
			<Button
				size='icon'
				variant='outline'
				onClick={() => window.open(shareUrl.linkedin, '_blank')}
			>
				<Linkedin />
			</Button>
			<Button
				size='icon'
				variant='outline'
				onClick={() => {
					navigator.clipboard.writeText(fullUrl)
					toast.success('Link nusxalandi')
				}}
			>
				<Link2 />
			</Button>
		</>
	)
}
