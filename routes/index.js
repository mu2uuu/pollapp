const router = require("express").Router();
const { MySQLClient, sql } = require("../lib/database/client.js");

// トピック一覧を取得して表示
router.get("/", async (req, res) => {

  let results;
  let chose = ['答えたら', '結果が', '見れるよ']
  let agree = ['123', '456', '789']

  try {
    results = await MySQLClient.executeQuery(
      await sql("SELECT_TOPICS"),
      []
    )
  } catch (err) {
    // next(err);
    res.send(err.message);
  }
  res.render("./index.ejs", { chose, agree, results });
})

module.exports = router;