'use client'

import { contactSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Send } from 'lucide-react'
import { useState } from 'react'
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

		const telegramBotId = process.env.NEXT_PUBLIC_TELEGRAM_BOT_API
		const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID

		const promise = fetch(
			`https://api.telegram.org/bot${telegramBotId}/sendMessage`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'cache-control': 'no-cache',
				},
				body: JSON.stringify({
					chat_id: telegramChatId,
					text: `
					👤Ism: ${values.name}

					☎️Telefon: ${values.phone}

					📩Xabar:

					${values.message}
					`,
				}),
			}
		)
			.then(() => form.reset())
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: "Xabaar jo'natilmoqda...",
			success: "Xabaar jo'natildi!",
			error: "Xabaar jo'natishda xatolik yuz berdi!",
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
					<span>Jo&apos;natish</span>
					<Send className='w-4 h-4 ml-2' />
				</Button>
			</form>
		</Form>
	)
}

export default ContactForm
