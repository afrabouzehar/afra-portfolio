import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing data' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
     auth: {
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
 

}
    });

    await transporter.sendMail({
      from: email,
      to: 'bouzehar.afra@gmail.com',            // 👈 WHERE you receive messages
      subject: 'New Portfolio Message',
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `
    });

    return res.status(200).json({ message: 'Email sent!' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error sending email' });
  }
}
