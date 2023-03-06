const router = require("express").Router();
const { MySQLClient, sql } = require("../lib/database/client.js");

// トピック一覧を取得して表示
router.get("/", async (req, res) => {

  let results;

  try {
    results = await MySQLClient.executeQuery(
      await sql("SELECT_TOPICS"),
      []
    )
  } catch (err) {
    res.send(err);
  }
  res.render("./index.ejs", { results });
})

module.exports = router;