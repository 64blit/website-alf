const nodemailer = require('nodemailer');

export default async function handler(req, res)
{
    if (req.method === 'POST')
    {

        const message = {
            from: req.body.email,
            to: process.env.INBOX,
            subject: 'contact us form: ' + req.body.name,
            text: req.body.message,
            html: `<p> phone: ${req.body.phone} message: ${req.body.message}</p>`,
        };

        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.GMAIL,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        transporter.sendMail(message, (err, info) =>
        {
            console.log('err', err);
            console.log('info', info);
            if (err)
            {
                res.status(404).json({
                    error: `Connection refused at ${err.address}`
                });
            } else
            {
                res.status(250).json({
                    success: `Message delivered to ${info.accepted}`
                });
            }
        });


    }
}
