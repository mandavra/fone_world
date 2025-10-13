import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
const PORT =  4001;

app.use(cors());
app.use(express.json());

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
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'mandavra12@gmail.com',
    // Accept the app password even if pasted with spaces
    pass: 'qniq bysx gggh npyn'.replace(/\s+/g, '')
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    const mail = await transporter.sendMail({
      from: `Website Contact <mandavra12@gmail.com>`,
      to: 'mandavra12@gmail.com',
      subject: 'New contact form submission',
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\n\nMessage:\n${message}`,
      html: renderEmail('New contact form submission', [
        ['Name', name],
        ['Email', email],
        ['Phone', phone || '-'],
        ['Message', `<div style="white-space:pre-wrap;">${(message || '').toString().replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>`]
      ])
    });
    console.log('Contact mail sent, id:', mail && mail.messageId);
    return res.json({ ok: true, id: mail.messageId });
  } catch (e) {
    console.error('Email send error (/api/contact):', e);
    const status = e && typeof e === 'object' && 'responseCode' in e ? e.responseCode : 500;
    return res.status(status || 500).json({ ok: false, error: 'Failed to send email' });
  }
});

app.post('/api/sell', async (req, res) => {
  try {
    const { sellerName, sellerPhone, brand, model, storage, condition, expectedPrice, message } = req.body || {};
    if (!sellerName || !sellerPhone || !brand || !model || !condition) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }
    const mail = await transporter.sendMail({
      from: `Sell Form <mandavra12@gmail.com>`,
      to: 'mandavra12@gmail.com',
      subject: 'New sell request',
      text: `Seller: ${sellerName}\nPhone: ${sellerPhone}\nBrand: ${brand}\nModel: ${model}\nStorage: ${storage || '-'}\nCondition: ${condition}\nExpected Price: ${expectedPrice || '-'}\n\nMessage:\n${message || '-'}`,
      html: renderEmail('New sell request', [
        ['Seller', sellerName],
        ['Phone', sellerPhone],
        ['Brand', brand],
        ['Model', model],
        ['Storage', storage || '-'],
        ['Condition', condition],
        ['Expected Price', expectedPrice || '-'],
        ['Message', `<div style=\"white-space:pre-wrap;\">${(message || '-').toString().replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>`]
      ])
    });
    console.log('Sell mail sent, id:', mail && mail.messageId);
    return res.json({ ok: true, id: mail.messageId });
  } catch (e) {
    console.error('Email send error (/api/sell):', e);
    const status = e && typeof e === 'object' && 'responseCode' in e ? e.responseCode : 500;
    return res.status(status || 500).json({ ok: false, error: 'Failed to send email' });
  }
});

app.post('/api/subscribe', async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});


