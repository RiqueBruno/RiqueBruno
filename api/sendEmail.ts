import nodemailer from 'nodemailer';

export default async function sendEmail(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log('Request body:', req.body);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: `Novo email de ${name}`,
      text: message,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('E-mail enviado:', info);
      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      res
        .status(500)
        .json({ message: 'Erro ao enviar email!', error: error.message });
    }
  } else {
    res.status(405).end(`Método ${req.method} não permitido!`);
  }
}
