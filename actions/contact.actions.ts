'use server'

import nodemailer from 'nodemailer'

export async function sendContactForm(formData: FormData) {
	const name = formData.get('name') as string
	const phone = formData.get('phone') as string
	const message = formData.get('message') as string

	if (!name || !phone || !message) {
		throw new Error('Barcha maydonlar to‘ldirilishi kerak')
	}

	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST!,
		port: parseInt(process.env.EMAIL_PORT || '587'),
		secure: process.env.EMAIL_SECURE === 'true', // string => boolean
		auth: {
			user: process.env.EMAIL_USER!,
			pass: process.env.EMAIL_PASS!,
		},
	})

	await transporter.sendMail({
		from: `"Sayt Kontakt" <${process.env.EMAIL_USER}>`,
		to: process.env.EMAIL_RECEIVER!,
		subject: '🆕 Yangi xabar - Ar-Roziy Clinic saytidan',
		html: `
			<div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
				<h2 style="color: #007BFF;">📬 Yangi xabar</h2>
				<p><strong>👤 Ismi:</strong> ${name}</p>
				<p><strong>📞 Telefon:</strong> ${phone}</p>
				<p><strong>💬 Xabar:</strong></p>
				<div style="background-color: #f9f9f9; padding: 10px; font-size: 20px; border-left: 4px solid #007BFF; margin-top: 5px;">
					${message}
				</div>
				<hr style="margin-top: 20px;"/>
				<p style="font-size: 12px; color: #888;">Bu xabar Ar-Roziy Clinic saytining kontakt formasi orqali yuborildi.</p>
			</div>
		`,
	})
}
