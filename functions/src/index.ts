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

exports.sendEmail = functions.https.onRequest((req:any, res:any) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return res.status(405).send({ success: false, message: 'Method not allowed' });
    }

    const { name, email, phone, proposal } = req.body.data;

    const mailOptions = {
      from: 'The Website Guys <theofficialwebsiteguys@gmail.com>',
      to: 'theofficialwebsiteguys@gmail.com',
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProposal: ${proposal}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Proposal:</strong> ${proposal}</p>`,
    };

    return mailTransport.sendMail(mailOptions)
      .then(() => {
        res.status(200).send({ success: true, message: 'Email sent successfully!' });
      })
      .catch((error:any) => {
        res.status(500).send({ success: false, message: error.message });
      });
  });
});