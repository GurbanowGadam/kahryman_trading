const { query } = require("./../Database/index");
const { Q_Formatter } = require("./../Functions/QFormatter");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login_admin = async (params) => {
  try {
    const sql = Q_Formatter(`SELECT * FROM admins WHERE username = ?;`, [
      params[0],
    ]);
    const { rows } = await query(sql, []);
    const result = await bcrypt.compare(params[1], rows[0].password);
    if (rows[0] && rows[0].id && result) {
      admin_token = jwt.sign({ id: rows[0].id }, process.env.TOKEN_KEY, {
        expiresIn: 60 * 60 * 24,
      });
      console.log("token", admin_token);
      return admin_token;
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};

module.exports = {
  login_admin,
};
