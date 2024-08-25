const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'theofficialwebsiteguys@gmail.com',
    pass: 'tshz rgqz yyhn tiwg'
  }
});

// exports.sendEmail = functions.https.onRequest((req:any, res:any) => {
//   cors(req, res, () => {
//     if (req.method !== 'POST') {
//       return res.status(405).send({ success: false, message: 'Method not allowed' });
//     }

//     const { name, email, phone, proposal } = req.body.data;

//     const mailOptions = {
//       from: 'The Website Guys <theofficialwebsiteguys@gmail.com>',
//       to: 'theofficialwebsiteguys@gmail.com',
//       subject: 'New Form Submission',
//       text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProposal: ${proposal}`,
//       html: `<p><strong>Name:</strong> ${name}</p>
//              <p><strong>Email:</strong> ${email}</p>
//              <p><strong>Phone:</strong> ${phone}</p>
//              <p><strong>Proposal:</strong> ${proposal}</p>`,
//     };

//     return mailTransport.sendMail(mailOptions)
//       .then(() => {
//         res.status(200).send({ success: true, message: 'Email sent successfully!' });
//       })
//       .catch((error:any) => {
//         res.status(500).send({ success: false, message: error.message });
//       });
//   });
// });

exports.sendEmail = functions.https.onRequest((req:any, res:any) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(405).send({ success: false, message: 'Method not allowed' });
    }

    const { name, email, phone, proposal, businessType } = req.body;
    const logo = req.files?.logo;
    const images = req.files?.images;

    const mailOptions = {
      from: 'The Website Guys <theofficialwebsiteguys@gmail.com>',
      to: 'theofficialwebsiteguys@gmail.com',
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nBusiness Type: ${businessType}\nProposal: ${proposal}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Business Type:</strong> ${businessType}</p>
             <p><strong>Proposal:</strong> ${proposal}</p>`,
      attachments: [{}]
    };

    if (logo) {
      mailOptions.attachments = [
        {
          filename: logo.name,
          content: logo.data
        }
      ];
    }

    if (images && images.length > 0) {
      mailOptions.attachments = mailOptions.attachments || [];
      images.forEach((image:any, index:any) => {
        mailOptions.attachments.push({
          filename: image.name,
          content: image.data
        });
      });
    }

    return mailTransport.sendMail(mailOptions)
      .then(() => {
        res.status(200).send({ success: true, message: 'Email sent successfully!' });
      })
      .catch((error:any) => {
        res.status(500).send({ success: false, message: error.message });
      });
  });
});