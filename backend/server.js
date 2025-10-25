// import express from 'express';
// import cors from 'cors';
// import nodemailer from 'nodemailer';

// const app = express();
// // Prefer env var, fallback to previous default

// // CORS: allow production site and local dev (Vite) origins
// const allowedOrigins = ['https://fone-world.vercel.app','http://localhost:5173'];
// const isProd = process.env.NODE_ENV === 'production';

// app.use(cors({
//   origin: function(origin, callback) {
//     if (!origin) return callback(null, true);
//     if (!isProd) return callback(null, true); // allow all in dev
//     if (allowedOrigins.includes(origin)) return callback(null, true);
//     return callback(new Error('Not allowed by CORS'));
//   },
//   methods: ['GET', 'POST', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// }));

// // Explicit OPTIONS handler for preflight
// app.options('*', cors(), (req, res) => {
//   res.sendStatus(204);
// });

// // Simple health endpoint
// app.get('/', (req, res) => {
//   res.json({ ok: true, service: 'backend', time: new Date().toISOString() });
// });

// // Increase JSON limit to allow base64 images from contact form
// app.use(express.json({ limit: '100mb' }));

// function renderEmail(title, rows) {
//   const rowsHtml = rows
//     .map(([label, value]) => `
//       <tr>
//         <td style="padding:10px 12px;font-weight:600;color:#111827;background:#f9fafb;border-bottom:1px solid #e5e7eb;width:160px;">${label}</td>
//         <td style="padding:10px 12px;color:#111827;border-bottom:1px solid #e5e7eb;">${value || '-'}</td>
//       </tr>`) 
//     .join('');
//   return `
//   <div style="background:#f3f4f6;padding:24px;">
//     <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:10px;overflow:hidden;">
//       <div style="padding:16px 20px;background:#111827;color:#ffffff;font-size:18px;font-weight:700;">${title}</div>
//       <div style="padding:8px 0;">
//         <table style="width:100%;border-collapse:collapse;font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
//           <tbody>
//             ${rowsHtml}
//           </tbody>
//         </table>
//       </div>
//       <div style="padding:12px 16px;font-size:12px;color:#6b7280;background:#f9fafb;border-top:1px solid #e5e7eb;">
//         Sent from Dr.ex Haywards Heathwebsite • Contact: <a href="mailto:drex.haywards@gmail.com" style="color:#2563eb;text-decoration:none;">drex.haywards@gmail.com</a>
//       </div>
//     </div>
//   </div>`;
// }

// // Configure transporter with Gmail credentials via env vars
// const gmailUser = 'drex.haywards@gmail.com';
// const gmailPass =  'marl vqux mvxo tknn'.replace(/\s+/g, '');

// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: gmailUser,
//     pass: gmailPass
//   }
// });

// app.post('/api/contact', async (req, res) => {
//   try {
//     const { name, email, phone, message, image, video } = req.body || {};
//     if (!name || !email || !message) {
//       return res.status(400).json({ ok: false, error: 'Missing required fields' });
//     }

//     const attachments = [];
//     const hasImage = image && typeof image === 'object' && image.data && image.type && image.name;
//     const hasVideo = video && typeof video === 'object' && video.data && video.type && video.name;
//     if (hasImage) {
//       try {
//         attachments.push({
//           filename: image.name,
//           content: Buffer.from(String(image.data), 'base64'),
//           contentType: image.type,
//           cid: 'contact-image-1'
//         });
//         console.log('Contact image received:', {
//           name: image.name,
//           type: image.type,
//           bytes: Buffer.from(String(image.data), 'base64').length
//         });
//       } catch (e) {
//         console.warn('Skipping invalid image attachment:', e);
//       }
//     }
//     if (hasVideo) {
//       try {
//         attachments.push({
//           filename: video.name,
//           content: Buffer.from(String(video.data), 'base64'),
//           contentType: video.type
//         });
//         console.log('Contact video received:', {
//           name: video.name,
//           type: video.type,
//           bytes: Buffer.from(String(video.data), 'base64').length
//         });
//       } catch (e) {
//         console.warn('Skipping invalid video attachment:', e);
//       }
//     }

//     const rows = [
//       ['Name', name],
//       ['Email', email],
//       ['Phone', phone || '-'],
//       ['Message', `<div style=\"white-space:pre-wrap;\">${(message || '').toString().replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>`]
//     ];
//     rows.push([
//       'Image',
//       hasImage
//         ? `<div><div style=\"color:#6b7280;font-size:12px;margin-bottom:6px;\">Attached image:</div><img src=\"cid:contact-image-1\" alt=\"Attachment\" style=\"max-width:320px;max-height:320px;border:1px solid #e5e7eb;border-radius:8px\" /></div>`
//         : '<span style=\"color:#6b7280\">No image provided</span>'
//     ]);
//     rows.push([
//       'Video',
//       hasVideo
//         ? `<div style=\"color:#6b7280;font-size:12px;\">Video attached: ${video.name}</div>`
//         : '<span style=\"color:#6b7280\">No video provided</span>'
//     ]);

//     const mail = await transporter.sendMail({
//       from: `Website Contact <${gmailUser}>`,
//       to: gmailUser,
//       subject: 'New contact form submission',
//       replyTo: email,
//       text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\n\nMessage:\n${message}${attachments.length ? `\n\n(${attachments.length} file(s) attached)` : ''}`,
//       html: renderEmail('New contact form submission', rows),
//       attachments
//     });
//     console.log('Contact mail sent, id:', mail && mail.messageId);
//     return res.json({ ok: true, id: mail.messageId });
//   } catch (e) {
//     console.error('Email send error (/api/contact):', e);
//     const status = e && typeof e === 'object' && 'responseCode' in e ? e.responseCode : 500;
//     return res.status(status || 500).json({ ok: false, error: 'Failed to send email' });
//   }
// });

// app.post('/api/sell', async (req, res) => {
//   try {
//     const { sellerName, sellerPhone, brand, model, storage, condition, expectedPrice, message } = req.body || {};
//     if (!sellerName || !sellerPhone || !brand || !model || !condition) {
//       return res.status(400).json({ ok: false, error: 'Missing required fields' });
//     }
//     const mail = await transporter.sendMail({
//       from: `Sell Form <${gmailUser}>`,
//       to: gmailUser,
//       subject: 'New sell request',
//       text: `Seller: ${sellerName}\nPhone: ${sellerPhone}\nBrand: ${brand}\nModel: ${model}\nStorage: ${storage || '-'}\nCondition: ${condition}\nExpected Price: ${expectedPrice || '-'}\n\nMessage:\n${message || '-'}`,
//       html: renderEmail('New sell request', [
//         ['Seller', sellerName],
//         ['Phone', sellerPhone],
//         ['Brand', brand],
//         ['Model', model],
//         ['Storage', storage || '-'],
//         ['Condition', condition],
//         ['Expected Price', expectedPrice || '-'],
//         ['Message', `<div style=\"white-space:pre-wrap;\">${(message || '-').toString().replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>`]
//       ])
//     });
//     console.log('Sell mail sent, id:', mail && mail.messageId);
//     return res.json({ ok: true, id: mail.messageId });
//   } catch (e) {
//     console.error('Email send error (/api/sell):', e);
//     const status = e && typeof e === 'object' && 'responseCode' in e ? e.responseCode : 500;
//     return res.status(status || 500).json({ ok: false, error: 'Failed to send email' });
//   }
// });

// app.post('/api/subscribe', async (req, res) => {
//   try {
//     const { email } = req.body || {};
//     if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       return res.status(400).json({ ok: false, error: 'Valid email required' });
//     }

//     const text = `New subscriber email: ${email}`;
//     const html = renderEmail('New subscriber', [
//       ['Email', email],
//       ['Subscribed At', new Date().toLocaleString()]
//     ]);

//     const mail = await transporter.sendMail({
//       from: `Subscriptions <${gmailUser}>`,
//       to: 'drex.haywards@gmail.com',
//       subject: 'New website subscriber',
//       replyTo: email,
//       text,
//       html
//     });
//     console.log('Subscribe mail sent, id:', mail && mail.messageId);
//     return res.json({ ok: true });
//   } catch (e) {
//     console.error('Email send error (/api/subscribe):', e);
//     const status = e && typeof e === 'object' && 'responseCode' in e ? e.responseCode : 500;
//     return res.status(status || 500).json({ ok: false, error: 'Failed to send email' });
//   }
// });

// app.listen(4001, () => { 
//   console.log(`Server listening on http://localhost:${4001}`); 
// });


import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
// Prefer env var, fallback to previous default

// CORS: allow production site and local dev (Vite) origins
const allowedOrigins = ['https://fone-world.vercel.app','http://localhost:5173'];
const isProd = process.env.NODE_ENV === 'production';

app.use(cors({
  origin: function(origin, callback) {
    if (!origin) return callback(null, true);
    if (!isProd) return callback(null, true); // allow all in dev
    if (allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Explicit OPTIONS handler for preflight
app.options('*', cors(), (req, res) => {
  res.sendStatus(204);
});

// Simple health endpoint
app.get('/', (req, res) => {
  res.json({ ok: true, service: 'backend', time: new Date().toISOString() });
});

// Increase JSON limit to allow base64 images from contact form
app.use(express.json({ limit: '100mb' }));

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
        Sent from Dr.ex Haywards Heathwebsite • Contact: <a href="mailto:drex.haywards@gmail.com" style="color:#2563eb;text-decoration:none;">drex.haywards@gmail.com</a>
      </div>
    </div>
  </div>`;
}

// Configure transporter with Gmail credentials via env vars
// const gmailUser = 'mandavra12@gmail.com';
// const gmailPass =  'qniq bysx gggh npyn'.replace(/\s+/g, '');

// Configure transporter with Gmail credentials via env vars
const gmailUser = 'drex.haywards@gmail.com';
const gmailPass =  'marl vqux mvxo tknn'.replace(/\s+/g, '');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: gmailUser,
    pass: gmailPass
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message, image, video } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    const attachments = [];
    const hasImage = image && typeof image === 'object' && image.data && image.type && image.name;
    const hasVideo = video && typeof video === 'object' && video.data && video.type && video.name;
    if (hasImage) {
      try {
        attachments.push({
          filename: image.name,
          content: Buffer.from(String(image.data), 'base64'),
          contentType: image.type,
          cid: 'contact-image-1'
        });
        console.log('Contact image received:', {
          name: image.name,
          type: image.type,
          bytes: Buffer.from(String(image.data), 'base64').length
        });
      } catch (e) {
        console.warn('Skipping invalid image attachment:', e);
      }
    }
    if (hasVideo) {
      try {
        attachments.push({
          filename: video.name,
          content: Buffer.from(String(video.data), 'base64'),
          contentType: video.type
        });
        console.log('Contact video received:', {
          name: video.name,
          type: video.type,
          bytes: Buffer.from(String(video.data), 'base64').length
        });
      } catch (e) {
        console.warn('Skipping invalid video attachment:', e);
      }
    }

    const rows = [
      ['Name', name],
      ['Email', email],
      ['Phone', phone || '-'],
      ['Message', `<div style=\"white-space:pre-wrap;\">${(message || '').toString().replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>`]
    ];
    rows.push([
      'Image',
      hasImage
        ? `<div><div style=\"color:#6b7280;font-size:12px;margin-bottom:6px;\">Attached image:</div><img src=\"cid:contact-image-1\" alt=\"Attachment\" style=\"max-width:320px;max-height:320px;border:1px solid #e5e7eb;border-radius:8px\" /></div>`
        : '<span style=\"color:#6b7280\">No image provided</span>'
    ]);
    rows.push([
      'Video',
      hasVideo
        ? `<div style=\"color:#6b7280;font-size:12px;\">Video attached: ${video.name}</div>`
        : '<span style=\"color:#6b7280\">No video provided</span>'
    ]);

    const mail = await transporter.sendMail({
      from: `Website Contact <${gmailUser}>`,
      to: gmailUser,
      subject: 'New contact form submission',
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '-'}\n\nMessage:\n${message}${attachments.length ? `\n\n(${attachments.length} file(s) attached)` : ''}`,
      html: renderEmail('New contact form submission', rows),
      attachments
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
      from: `Sell Form <${gmailUser}>`,
      to: gmailUser,
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
      from: `Subscriptions <${gmailUser}>`,
      to: 'drex.haywards@gmail.com',
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

app.listen(4001, () => { 
  console.log(`Server listening on http://localhost:${4001}`); 
});






