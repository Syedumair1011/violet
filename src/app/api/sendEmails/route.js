// Import necessary modules
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Handles POST requests to /api/sendEmails
export async function POST(request) {
    try {
        // Fetch environment variables
        const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
        const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
        const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

        // Parse form data from request
        const formData = await request.formData();
        const name = formData.get('name');
        const email = formData.get('email');
        const phone = formData.get('phone');
        const message = formData.get('message');

        // Create Nodemailer transporter
        const transporter = nodemailer.createTransport({
            host: "axproperty.com",
            port: 465,
            secure: true,
            auth: {
                user: username,
                pass: password
            },
            tls: {
                ciphers: "SSLv3",
                rejectUnauthorized: false
            }
        });

        // Prepare HTML content for the email
        const htmlContent = `
            <html>
            <head>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        padding: 20px;
                    }
                    .email-container {
                        background-color: #ffffff;
                        border-radius: 8px;
                        padding: 30px;
                        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
                    }
                    h2 {
                        color: #333333;
                        font-size: 24px;
                        margin-bottom: 20px;
                    }
                    p {
                        color: #666666;
                        font-size: 16px;
                        line-height: 1.6;
                    }
                    .message {
                        margin-top: 30px;
                        border-top: 1px solid #eeeeee;
                        padding-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <h2>New Message from Website</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <div class="message">
                        <p><strong>Message:</strong></p>
                        <p>${message}</p>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Send email
        const mail = await transporter.sendMail({
            from: username,
            to: myEmail,
            replyTo: email,
            subject: `New Lead From DAMAC Violet`,
            html: htmlContent,
        });

        // Handle success response
        return NextResponse.json({ message: "Success: email was sent" });

    } catch (error) {
        // Handle errors
        console.error("Error sending email:", error);
        return NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" });
    }
}
