import nodemailer from 'nodemailer';

// Basic HTML email template
function renderEmail(title, rows) {
  const rowsHtml = rows
    .map(([label, value]) => `
      <tr>
        <td style="padding:10px 12px;font-weight:600;color:#111827;background:#f9fafb;border-bottom:1px solid #e5e7eb;width:160px;">${label}</td>
        <td style="padding:10px 12px;color:#111827;border-bottom:1px solid #e5e7eb;">${value || '-'}</td>
      </tr>`)
    .join('');
  return `
  <div style="background:#f3f4f6;padding:24px;">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
      <div style="padding:16px 20px;background:#111827;color:#ffffff;font-size:18px;font-weight:700;">${title}</div>
      <div style="padding:8px 0;">
        <table style="width:100%;border-collapse:collapse;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
      <div style="padding:12px 16px;font-size:12px;color:#6b7280;background:#f9fafb;border-top:1px solid #e5e7eb;">
        Sent from Fone World website • Contact: <a href="mailto:haywards@gmail.com" style="color:#2563eb;text-decoration:none;">haywards@gmail.com</a>
      </div>
    </div>
  </div>`;
}

// Configure transporter with provided Gmail credentials
const transporter = nodemailer.createTransporter({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'mandavra12@gmail.com',
    // Accept the app password even if pasted with spaces
    pass: 'qniq bysx gggh npyn'.replace(/\s+/g, '')
  }
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { email } = req.body || {};
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ ok: false, error: 'Valid email required' });
    }

    const text = `New subscriber email: ${email}`;
    const html = renderEmail('New subscriber', [
      ['Email', email],
      ['Subscribed At', new Date().toLocaleString()]
    ]);

    const mail = await transporter.sendMail({
      from: `Subscriptions <mandavra12@gmail.com>`,
      to: 'haywards@gmail.com',
      subject: 'New website subscriber',
      replyTo: email,
      text,
      html
    });
    console.log('Subscribe mail sent, id:', mail && mail.messageId);
    return res.json({ ok: true });
  } catch (e) {
    console.error('Email send error (/api/subscribe):', e);
    const status = e && typeof e === 'object' && 'responseCode' in e ? e.responseCode : 500;
    return res.status(status || 500).json({ ok: false, error: 'Failed to send email' });
  }
}
