'use client'

import { sendContactForm } from '@/actions/contact.actions'
import UseTranslate from '@/hooks/use-translate'
import { contactSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '../ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [isPending, startTransition] = useTransition()
	const t = UseTranslate()

	const form = useForm<z.infer<typeof contactSchema>>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			phone: '+998',
			message: '',
			name: '',
		},
	})

	function onSubmit(values: z.infer<typeof contactSchema>) {
		setIsLoading(true)

		startTransition(async () => {
			try {
				const formData = new FormData()
				formData.append('name', values.name)
				formData.append('phone', values.phone)
				formData.append('message', values.message)
				await sendContactForm(formData)
				toast.success("Xabaringiz jo'natildi")
				form.reset()
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (error) {
				toast.error('Xatolik yuz berdi')
			} finally {
				setIsLoading(false)
			}
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='mt-4 text-gray-700 text-lg leading-relaxed'>
								Ismingiz
							</FormLabel>
							<FormControl>
								<Input placeholder='Mustafo' disabled={isLoading} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='phone'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='mt-4 text-gray-700 text-lg leading-relaxed'>
								Telefon raqamingizni kiriting
							</FormLabel>
							<FormControl>
								<Input disabled={isLoading} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem>
							<FormLabel className='mt-6 text-gray-700 text-lg leading-relaxed'>
								Xabaringizni yozing
							</FormLabel>
							<FormControl>
								<Textarea
									disabled={isLoading}
									placeholder='Qanday yordam bera olishimiz mumkin?'
									className='resize-none h-32'
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className='w-fit mt-4'
					size={'lg'}
					type='submit'
					disabled={isLoading}
				>
					{isPending ? t('sending') : t('send')}
					<Send size={'4'} />
				</Button>
			</form>
		</Form>
	)
}

export default ContactForm
