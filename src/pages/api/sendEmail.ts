import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export default async function SendEmailAPI(req: any, res: any) {
  const { name, email, message } = req.body

  const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 587,
		secure: false,
		auth: {
			user: process.env.EMAIL_USERNAME,
			pass: process.env.EMAIL_PASS,
		},
	})

  try {
    const mail = await transporter.sendMail({
			from: process.env.EMAIL_USERNAME,
			to: 'grigorogannisyan.12@gmail.com',
			replyTo: email,
			subject: `Анкета ${name}`,
			html: `
        <p>Имя: ${name}</p>
        <p>Email: ${email}</p>
        <p>Сообщение: ${message}</p>
      `,
		})

    console.log('Message sent:', mail.messageId)

    return res.status(200).json({ message: 'success' })

  } catch (error) {
    console.log(error)
    // res.status(500).json({ message: 'Could not send the email.' })
  }
}