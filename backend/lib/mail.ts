import { createTransport, getTestMessageUrl } from "nodemailer";
import 'dotenv/config';

const transport = createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    }
})

function makeANiceemail(text: string): string {
    return `
        <div style="
            border: 1px solid black;
            padding: 20px;
            font-family: sans-serif;
            line-height: 2;
            font-size: 20px;
        ">
            <h2>Hello There!</h2>
            <p>${text}</p>
            <p>Evan</p>
        </div>
    `
}

export async function sendPasswordResetEmail(resetToken: string, to: string): Promise<void> {
    const info = await transport.sendMail({
        to,
        from: 'test@example.com',
        subject: 'Your password reset token',
        html: makeANiceemail(`Your Password Reset Token is Here!
            <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click Here to Reset</a>
        `)
    })
    if(process.env.MAIL_USER?.includes('ethereal.email')) {
        console.log(`Message sent! Preview it at ${getTestMessageUrl(info)}`)
    }
}