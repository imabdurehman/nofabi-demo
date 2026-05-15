import nodemailer from 'nodemailer'
import type { ContactFormData } from '@/types'

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const emailUser = process.env.EMAIL_USER
  const emailPass = process.env.EMAIL_PASS
  const emailTo = process.env.EMAIL_TO

  if (!emailUser || !emailPass || !emailTo) {
    throw new Error('Email environment variables are not configured')
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  })

  const timestamp = new Date().toLocaleString('en-PK', {
    timeZone: 'Asia/Karachi',
    dateStyle: 'full',
    timeStyle: 'short',
  })

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><title>New Contact - NOFABI</title></head>
<body style="margin:0;padding:0;background:#f0f9ff;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f9ff;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
        <tr>
          <td style="background:#0C4A6E;padding:32px 40px;text-align:center;">
            <h1 style="color:#0EA5E9;font-size:32px;font-weight:800;margin:0;letter-spacing:-1px;">NOFABI</h1>
            <p style="color:#E0F2FE;margin:8px 0 0;font-size:14px;">New Contact Form Submission</p>
          </td>
        </tr>
        <tr>
          <td style="padding:40px;">
            <p style="color:#0C4A6E;font-size:18px;font-weight:600;margin:0 0 24px;">You have a new enquiry!</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #E0F2FE;">
                  <span style="color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Full Name</span>
                  <p style="margin:4px 0 0;color:#0F172A;font-size:16px;font-weight:500;">${data.name}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #E0F2FE;">
                  <span style="color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Email Address</span>
                  <p style="margin:4px 0 0;color:#0EA5E9;font-size:16px;font-weight:500;">${data.email}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #E0F2FE;">
                  <span style="color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Phone Number</span>
                  <p style="margin:4px 0 0;color:#0F172A;font-size:16px;font-weight:500;">${data.phone}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid #E0F2FE;">
                  <span style="color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Service Required</span>
                  <p style="margin:4px 0 0;color:#0F172A;font-size:16px;font-weight:500;">${data.service}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 0;">
                  <span style="color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;font-weight:600;">Message</span>
                  <p style="margin:8px 0 0;color:#0F172A;font-size:15px;line-height:1.6;background:#f0f9ff;padding:16px;border-radius:8px;border-left:3px solid #0EA5E9;">${data.message}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#f0f9ff;padding:20px 40px;text-align:center;border-top:1px solid #E0F2FE;">
            <p style="color:#64748b;font-size:12px;margin:0;">Received on ${timestamp} (PKT)</p>
            <p style="color:#0C4A6E;font-size:12px;font-weight:600;margin:4px 0 0;">© 2025 NOFABI — Pakistan's #1 Digital Growth Agency</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`

  await transporter.sendMail({
    from: `"NOFABI Contact Form" <${emailUser}>`,
    to: emailTo,
    replyTo: data.email,
    subject: `New Enquiry: ${data.name} — ${data.service}`,
    html,
  })
}
