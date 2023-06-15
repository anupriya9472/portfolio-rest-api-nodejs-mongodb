import nodemailer from "nodemailer";
import config from "../config.js";

const sendVerifyMail = async (to, subject, content) => {
    // Sending mail through nodemailer
    try {
        const mailer_transporter = nodemailer.createTransport(config.mailTransport);

        const mail = await mailer_transporter.sendMail({
            from: `<${config.ADMIN_EMAIL}>`,
            to: to,
            subject: subject,
            html: content
        });

        if (mail.messageId) {
            return 1;
        } else {
            return 0;
        }
    } catch (err) {
        throw new Error(err);
    }
}

export default sendVerifyMail;