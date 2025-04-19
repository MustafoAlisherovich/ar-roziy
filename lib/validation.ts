import { z } from 'zod'

export const contactSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Ism kamida 2 ta belgidan iborat bo'lishi kerak" }),
	phone: z
		.string()
		.min(9, { message: "Telefon raqamingizni to'g'ri kiriting" }),
	message: z.string().min(10, {
		message: "Xabaringiz kamida 10 ta belgidan iborat bo'lishi kerak",
	}),
})
