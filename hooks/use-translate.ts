'use client'

import { useTranslation } from '@/i18n/client'
import { useParams } from 'next/navigation'

const UseTranslate = () => {
	const { lng } = useParams()
	const { t } = useTranslation(lng as string)

	return t
}

export default UseTranslate
