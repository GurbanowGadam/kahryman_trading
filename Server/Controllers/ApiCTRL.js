const status = require("./../Utilis/status");
const apiQuery = require("./../Queries/ApiQuery");
// const nodemailer = require("nodemailer");
// const validator = require("validator");

const home = async (req, res) => {
  try {
    const { lang } = req.params;
    const result = await apiQuery.get_home(lang);
    if (result != "false") {
      res.status(status.OK).json({
        header: result[0],
        topics: result[1],
        faciliti: result[2],
        slider: result[3],
        agens: result[4],
        statistics: result[5],
        footer: result[6],
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
      res.status(status.OK).json({ data: result });
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
      res.status(status.OK).json({ data: result });
    } else {
      res.status(status.ERROR).json({ msg: "query error" });
    }
  } catch (err) {
    res.status(status.ERROR).json({ msg: err.message });
  }
};

const gallery = async (req, res) => {
  try {
    const result = await apiQuery.get_gallery();
    if (result != "false") {
      res.status(status.OK).json({ data: result });
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
    const result = await apiQuery.get_home();
    res.status(status.OK).json({ data: rows });
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
        Mail details
        
        Name:${req.body.name}
        Email:${req.body.email}
        Subject:${req.body.subject}
        
            MESSAGE
        ${req.body.message} `;
      const q = `
                  INSERT INTO send_messages(name, email, title, message) 
                  values('${req.body.name}','${req.body.email}','${req.body.subject}','${req.body.message}');
                `;

      async function main() {
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        // let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: process.env.MAIL_HOST, //"smtp.gmail.com",
          port: 465,
          secure: true, // true for 465, false for other ports
          // service: 'gmail.com',
          auth: {
            user: process.env.MAIL_USERNAME, // generated ethereal user
            pass: process.env.MAIL_PASSWORD, // generated ethereal password
          },
        });
        console.log("MAILL");
        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: process.env.MAIL_FROM_ADDRESS, //'akmyradowakmuhammet21@gmail.com', // sender address
          to: process.env.MAIL_FROM_ADDRESS, // list of receivers
          // to: "akmyradowakmuhammet21@gmail.com", // list of receivers
          subject: process.env.MAIL_SUBJECT, // Subject line
          text: outputhtml, // plain text body
          // html: outputhtml, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

        const { rows } = await database.query(q, []);
        res.send({ status: true });
      }

      main().catch((err) => {
        console.log(err);
        res.send({
          status: false,
          msg: "Doesnt send your message",
        });
      });
    } else {
      console.log("email not correct");
      res.send({
        status: false,
        msg: "email not correct",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).send(e.message);
  }
};

module.exports = {
  send_email,
};

module.exports = {
  home,
  about,
  contact,
  gallery,
  product,
  footer,
  topic_s,
  topic_33834,
  topic_46292,
  topic_49617,
  send_email,
};
