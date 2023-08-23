require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();



app.use(express.static(path.join(__dirname, '../DEMO_WEBSITE')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../DEMO_WEBSITE/index.html'));
  });
  

  app.post('/send-email', (req, res) => {
    // Destructure data from the request body
    console.log('Received request:', req.body); // Log the request body
    const { name, email, mobileNumber, subject, message } = req.body;

    // Create a transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Now using the environment variable
            pass: process.env.EMAIL_PASS  // Now using the environment variable
        }
    });

    // Set up email data
    let mailOptions = {
        from: 'email', // Your Gmail address
        to: 'amayshah924@gmail.com', // Same as from address, as you want to send the email to yourself
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nSubject: ${subject}\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('An error occurred.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully.');
        }
    });
});



app.listen(3000, () => {
    console.log('Server running on port 3000');
});
