import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

// Define the types for the incoming request body
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Ensure the request body contains the expected properties
    const { name, email, message }: ContactFormData = req.body;

    // Create a transporter for sending the email using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail password or app password
      },
    });

    // Define email content
    const mailOptions = {
      from: email, // user email (sender)
      to: process.env.EMAIL_USER, // your email (receiver)
      subject: `New message from ${name}`,
      text: `Message from: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ message: 'Error sending message' });
    }
  } else {
    // Handle other HTTP methods
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
