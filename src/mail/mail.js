
const nodemailer = require("nodemailer");



let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "2034182deb966b", // generated ethereal user
      pass: "88c58f855bc930", // generated ethereal password
    },
  });

module.exports=transporter