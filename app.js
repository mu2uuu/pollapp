const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
require("dotenv").config();
const app = express();

// 設定
app.set("views", path.join(__dirname, "views"));
app.set("View engin", "ejs");

// ミドルウェア
app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use(favicon(path.join(__dirname, "/public/favicon.ico")));
app.use(express.urlencoded({ extended: true }));

// ダイナミックルート
const router = express.Router();
app.use("/survey", require("./routes/survey.js"));
app.use("/", require("./routes/index.js"));

// エラーページ
app.use((req, res, next) => {
  res.status(404);
  res.render("./404.ejs");
});
app.use((err, req, res, next) => {
  res.status(500);
  res.render("./500.ejs");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("サーバーが起動しました");
})