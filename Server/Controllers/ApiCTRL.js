const status = require("./../Utilis/status");
const apiQuery = require("./../Queries/ApiQuery");
const nodemailer = require("nodemailer");
const validator = require("validator");

const home = async (req, res) => {
  try {
    const { lang } = req.params;
    const result = await apiQuery.get_home(lang);
    if (result != "false") {
      res.status(status.OK).json({
        header: result[0],
        faciliti: result[1],
        slider: result[2],
        agens: result[3],
        statistics: result[4],
        footer: result[5],
      });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const about = async (req, res) => {
  try {
    const { lang } = req.params;
    const result = await apiQuery.get_about(lang);
    if (result != "false") {
      res.status(status.OK).json({
        data: result[0],
        images: result[1],
        header: result[2],
        footer: result[3],
      });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const product = async (req, res) => {
  try {
    const { lang } = req.params;
    const result = await apiQuery.get_product(lang);
    if (result != "false") {
      res
        .status(status.OK)
        .json({ data: result[0], header: result[1], footer: result[2] });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const gallery = async (req, res) => {
  try {
    const lang = req.params;
    const result = await apiQuery.get_gallery(lang);
    if (result != "false") {
      res
        .status(status.OK)
        .json({ data: result[0], header: result[1], footer: result[2] });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const contact = async (req, res) => {
  try {
    const { lang } = req.params;
    const result = await apiQuery.get_contact(lang);
    if (result != "false") {
      res
        .status(status.OK)
        .json({ data: result[0], header: result[1], footer: result[2] });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const topic_s = async (req, res, next) => {
  try {
    const { data_s } = require("../../Server/Functions/sorce");
    res.status(status.OK).json(data_s);
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const topic_33834 = async (req, res) => {
  try {
    const { data_33834 } = require("../../Server/Functions/sorce");
    res.status(status.OK).json(data_33834);
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const topic_46292 = async (req, res, next) => {
  try {
    const { lang } = req.params;
    const { data_46292 } = require("../../Server/Functions/sorce");
    const result = await apiQuery.topics(data_46292, lang);
    res.status(status.OK).json(result);
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const topic_49617 = async (req, res, next) => {
  try {
    const { data_49617 } = require("../../Server/Functions/sorce");
    res.status(status.OK).json(data_49617);
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const send_email = async (req, res) => {
  try {
    const email = validator.isEmail(req.body.email);

    if (email) {
      let outputhtml = `
       <h1> Mail details </h1>
        
      <p> Name:${req.body.name} </p>
      <p> Email:${req.body.email} </p>
      <p> Subject:${req.body.subject} </p>
        
      <h> MESSAGE </h>
      <p> ${req.body.message} </p>`;

      async function main() {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: process.env.MAIL_HOST,
          port: process.env.MAIL_PORT,
          secure: true,
          // service: 'gmail.com',
          auth: {
            user: process.env.MAIL_USERNAME, // generated ethereal user
            pass: process.env.MAIL_PASSWORD, // generated ethereal password
          },
        });
        console.log("MAILL");
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: process.env.MAIL_FROM_ADDRESS,
          to: process.env.MAIL_FROM_ADDRESS,
          subject: process.env.MAIL_SUBJECT,
          text: outputhtml,
          html: outputhtml,
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        res.status(200).json({ msg: "successfull!" });
      }

      main().catch((err) => {
        console.log(err);
        res.status(status.OK).json({ msg: err.message });
      });
    } else {
      console.log("email not correct");
      res.status(status.ERROR).json({ msg: "email not correct" });
    }
  } catch (err) {
    console.log(err);
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const header = async (req, res) => {
  try {
    const { lang, menu } = req.params;
    const result = await apiQuery.get_header(lang, menu);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const footer = async (req, res) => {
  try {
    const { lang } = req.params;
    const result = await apiQuery.get_footer(lang);
    if (result != "false") {
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

module.exports = {
  home,
  about,
  contact,
  gallery,
  product,

  topic_s,
  topic_33834,
  topic_46292,
  topic_49617,
  send_email,
  header,
  footer,
};
