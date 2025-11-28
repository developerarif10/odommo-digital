import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, subject, service, message } = await request.json()

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,          // Gmail SSL port
      secure: true,       // true for 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email content
    const mailOptions = {
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO,
      subject: `New Message: ${subject || 'No Subject'}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    }

    // Send mail
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 })
  }
}
