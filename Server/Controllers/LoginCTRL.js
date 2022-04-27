const status = require("./../Utilis/status");
const loginQuery = require("./../Queries/LoginQuery");

const login_admin = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res
        .status(status.ERROR)
        .json({ msg: "Please enter your name and password" });
    }
    const result = await loginQuery.login_admin([username, password]);
    if (result) {
      res.status(status.OK).json({ token: result });
    } else {
      res.status(status.ERROR).json({ msg: "query tarapda error bar" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
  login_admin,
};
