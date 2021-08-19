const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
	auth: {
		api_key: "8f48f94d49f5e4cfda3c3cbc493e149c-9776af14-b738d6e9",
		domain: "sandbox4134021dfd8143db9692db019bb71433.mailgun.org"
	}
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (email, subject, text, cb) => {

	const mailOptions = {
		from: email,
		to: "paguejoy.webdev@gmail.com",
		subject,
		text
	};

	transporter.sendMail(mailOptions, function(err, data){
		if(err){
			cb(err, null);
			// return false
		}else {
			cb(null, data)
			// return true
		}
	})
}

module.exports = sendMail;
