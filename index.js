const credentials = require('./credentials');
const nodemailer = require('nodemailer');


const smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: credentials.user,
        pass: credentials.pass
    }
});

const mail = {
    from: "Yashwant Chavan <from@gmail.com>",
    to: "hsiwkin@gmail.com",
    subject: "Send Email Using Node.js",
    text: "Node.js New world for me",
    html: "<b>Node.js New world for me</b>"
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