import nodemailer from 'nodemailer'
const {EMAIL_USER, EMAIL_PASSWORD} = process.env

const sendEmail = async (to: string, subject: string, message: string) => {
  try {
    const config = {
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD
      }
    }

    const transporter = nodemailer.createTransport(config)

    const mailOptions = {
      from: EMAIL_USER,
      to,
      subject,
      message
    }

    const info = await transporter.sendMail(mailOptions)

    return {
      status: 'OK',
      info
    }
  } catch (error) {
    return {
      status: 'ERROR',
      error: (error as Error).message
    }
  }
}

export default sendEmail;
