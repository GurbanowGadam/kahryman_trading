const AdminRouter = require("./AdminRouter");
const ApiRouter = require("./ApiRouter");
const LoginRouter = require("./LoginRouter");
const login_check_token = require("./../Middlewares/login_check_token");
const SendMail = require("./../Controllers/ApiCTRL")

module.exports = (app) => {
  app.use("/api/admin", login_check_token, AdminRouter);
  app.use("/api", ApiRouter);
  app.use("/api/login", LoginRouter);
  app.post('/api/himiya-product/send-mail',SendMail.send_email_himiya)  
};
