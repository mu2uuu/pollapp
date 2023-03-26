const express = require("express");
const favicon = require("serve-favicon");
const path = require("path");
require("dotenv").config();
const { MySQLClient, sql } = require("./lib/database/client.js");
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

// viewの接続確認
app.get("/view", (req, res) => {
  let message = "hello world"
  res.render("./template.ejs");
})

// DB接続テスト
app.get("/test", async (req, res) => {
  try {
    results = await MySQLClient.executeQuery(
      await sql("SELECT_TOPICS"),
      []
    );
    res.send(results);
  } catch (err) {
    res.send(err);
  }
})

app.listen(process.env.PORT || 3000, () => {
  console.log("サーバーが起動しました");
})