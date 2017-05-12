let nodemailer = require('nodemailer')

const config = {
  service: 'gmail',
  auth: {
    user: 'gmail.user@gmail.com',
    pass: 'yourpass'
  }
}

let mailOptions = {
  from: '"Fred Foo 👻" <foo@blurdybloop.com>',
  to: 'bar@blurdybloop.com, baz@blurdybloop.com',
  subject: 'Hello ✔',
  text: 'Hello world ?',
  html: '<b>Hello world ?</b>'
}

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport(config)

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message %s sent: %s', info.messageId, info.response);
})