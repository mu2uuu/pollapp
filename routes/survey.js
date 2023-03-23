const router = require("express").Router();
const { MySQLClient, sql } = require("../lib/database/client.js");

var createDate = function(req) {
  return {
    nickname: req.body.nickname,
    chose: req.body.chose,
    prise: req.body.prise
  }
}

router.get("/", (req, res) => {
  res.send("hello topics");
})

// 登録
router.get("/regist/:id", async (req, res, next) =>{
  var id = req.params.id;
  let topic, chose;
  try {
    topic = await MySQLClient.executeQuery(
      await sql("SELECT_TOPICS_BY_TOPICS_ID.sql"),
      [id]
    )
    chose = await MySQLClient.executeQuery(
      await sql("SELECT_CHOSE_BY_TOPICS_ID.sql"),
      [id]
    )
  } catch (err) {
    res.send(err);
  }
  res.render("./survey-form.ejs", { topic: topic[0], chose: chose});
})

// 確認
router.post("/regist/confirm", (req, res ,next) => {
  var { topicId } = req.body
  var data = createDate(req);
  res.render("./regist-confirm.ejs", { topicId, data });
})

module.exports = router;