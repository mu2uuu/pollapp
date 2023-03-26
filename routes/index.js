const router = require("express").Router();
const { MySQLClient, sql } = require("../lib/database/client.js");

// トピック一覧を取得して表示
router.get("/", async (req, res) => {
  
  res.render("./index.ejs");
})

module.exports = router;