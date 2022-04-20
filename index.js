require("dotenv").config();
const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");

app.use(morgan("dev"));
app.use(cors());

app.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);

app.use("/", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/upload", express.static(path.join(__dirname, "upload")));

app.listen(process.env.PORT, () => {
  console.log("listening => ", process.env.PORT);
});

require("./Server/Routers/RouterManager")(app);
