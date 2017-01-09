const credentials = require('./credentials');
const nodemailer = require('nodemailer');
const fs = require('fs');


const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: credentials.user,
        pass: credentials.pass
    }
});


const mail = {
    from: "Hubert Siwkin <from@gmail.com>",
    to: "hsiwkin@gmail.com",
    subject: "Wiadomość testowa",
    text: "Tekst wiadomości testowej",
    html: fs.readFileSync('templates/mail.html', 'utf-8')
};

smtpTransport.sendMail(mail, (error, response) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Message sent:');
        console.log(response);
    }

    smtpTransport.close();
});