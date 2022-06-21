const { mailTransport } = require("../utils/mail");

module.exports.getUsersInfos = (req, res) => {
  res.status(200).json({ message: "users information ++++" });
};

module.exports.register = (req, res) => {
  try {
    const { email } = req.body;

    mailTransport().sendMail(
      {
        from: process.env.AUTH_EMAIL,
        to: email,
        subject: "Verify your email account",
        html: `<p>Thank you heroku !</p>`,
      },
      (error, info) => {
        if (error) {
          console.log(error);
        } else {
          console.log(info);
        }
      }
    );
    res.status(200).json({ message: "Send email success" });
  } catch (error) {
    console.log(error);
  }
};
