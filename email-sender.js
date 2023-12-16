const nodemailer = require("nodemailer");

let mailSender = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "khaledgbibia3@gmail.com",
    pass: "Gsejamail18?",
  },
});

let mailOptions = {
  from: "youremail@gmail.com",
  to: "receivermail@gmail.com",
  subject: "Sending from Nodejs",
  text: "Hello there",
};

mailSender.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(`Error is ${err}`);
  } else {
    console.log(info.response);
  }
});