'use client'

import { sendContactForm } from '@/actions/contact.actions'
import useTranslate from '@/hooks/use-translate'
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
	const t = useTranslate()

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
		<>
			<h1 className='text-3xl font-poppins text-primary font-bold mb-2'>
				{t('form')}
			</h1>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel className='mt-4 text-gray-700 text-lg leading-relaxed'>
									{t('name')}
								</FormLabel>
								<FormControl>
									<Input
										placeholder='Mustafo'
										disabled={isLoading}
										{...field}
									/>
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
									{t('phone')}
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
									{t('message')}
								</FormLabel>
								<FormControl>
									<Textarea
										disabled={isLoading}
										placeholder={t('messagePlaceholder')}
										className='resize-none h-32'
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						className='w-fit mt-4 cursor-pointer'
						size={'lg'}
						type='submit'
						disabled={isLoading}
					>
						{isPending ? t('sending') : t('send')}
						<Send size={'4'} />
					</Button>
				</form>
			</Form>
		</>
	)
}

export default ContactForm
