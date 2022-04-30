const jwt = require("jsonwebtoken");
const status = require("./../Utilis/status");

const login_check_token = async (req, res, next) => {
  try {
    const token_bearer = req.headers["authorization"]; //tokenin onunde bearer bolany ucin sondan sonyny bolup alyas

    if (token_bearer != undefined) {
      const token = token_bearer.substring(7);
      jwt.verify(token, process.env.TOKEN_KEY, (error) => {
        if (!error) {
          console.log("Token dogry");
          next();
        } else {
          console.log("wagty doldy");
          res.status(status.Unauthorized).json({ msg: "wagt doldy" });
        }
      });
    } else {
      console.log("Token yok");
      res.status(status.Unauthorized).json({ msg: "token yok" });
    }
  } catch (e) {
    console.error(e);
    res.status(status.ERROR).send(e.message);
  }
};

module.exports = login_check_token;
