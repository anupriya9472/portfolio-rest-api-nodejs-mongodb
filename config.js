import dotenv from "dotenv";
dotenv.config();

const config = {
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    mailTransport: {
        host: "smtp.gmail.com",
        auth: {
            user: process.env.ADMIN_EMAIL,
            pass: process.env.ADMIN_EMAIL_PASSWORD,
        },
    }
};

export default config;