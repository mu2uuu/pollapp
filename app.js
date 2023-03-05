const express = require("express");
const path = require("path");
require("dotenv").config();
const { MySQLClient, sql } = require("./lib/database/client.js");
const app = express();

// 設定
app.set("views", path.join(__dirname, "views"));
app.set("View engin", "ejs");

// ミドルウェア
app.use(express.json());

// ルート接続確認
app.get("/", (req, res) => {
  res.send("hello express");
})

// viewの接続確認
app.get("/view", (req, res) => {
  let message = "hello world"
  res.render("./index.ejs", { message });
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

app.listen(process.env.PORT, () => {
  console.log("サーバーが起動しました");
})