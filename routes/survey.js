const router = require("express").Router();
const { MySQLClient, sql } = require("../lib/database/client.js");

let createDate = function (req) {
  return {
    nickname: req.body.nickname || "",
    chose: req.body.chose || "",
    comment: req.body.comment || ""
  }
}

let validateData = function(data, commentTitle) {
  let isValid = true;
  let error = {};
  if(!data.nickname || !data.nickname.match(/\S/g)){
    isValid = false;
    error.nickname = "ニックネームは空白ダメです";
  }
  if(!data.comment || !data.comment.match(/\S/g)) {
    isValid = false;
    error.comment = commentTitle + "は空白ダメです";
  }

  if(isValid) {
    return undefined;
  }
  return error;
}

// トピック一覧を取得して表示
router.get("/", async (req, res, next) => {

  let results;
  let chose = ['答えたら', '結果が', '見れるよ']
  let agree = ['123', '456', '789']

  try {
    results = await MySQLClient.executeQuery(
      await sql("SELECT_TOPICS"),
      []
    )
  } catch (err) {
    next(err);
  }
  res.render("./survey-top.ejs", { chose, agree, results });
})

// 回答(ホーム画面から遷移)
router.get("/regist/:id(\\d+)", async (req, res, next) => {
  let id = req.params.id;
  let data = createDate(req);
  let topic, chose, topicId;
  try {
    topic = await MySQLClient.executeQuery(
      await sql("SELECT_TOPICS_BY_TOPICS_ID.sql"),
      [id]
    )
    chose = await MySQLClient.executeQuery(
      await sql("SELECT_CHOSE_BY_TOPICS_ID.sql"),
      [id]
    )

    topicId = topic[0].topics_id
    commentTitle = topic[0].comment_title
    res.render("./survey-form.ejs", { topicId, commentTitle, data, chose });

  } catch (err) {
    next(err);
  }
})

// 回答(確認画面から遷移)
router.post("/regist/:id(\\d+)", async (req, res, next) => {
  let data = createDate(req);
  let { topicId } = req.body
  let chose;
  try {
    chose = await MySQLClient.executeQuery(
      await sql("SELECT_CHOSE_BY_TOPICS_ID.sql"),
      [topicId]
    )

    res.render("./survey-form.ejs", { topicId, data, chose });

  } catch (err) {
    next(err);
  }
})

// 確認
router.post("/regist/confirm", async (req, res, next) => {
  let { topicId } = req.body
  let data = createDate(req);
  let chose;
  try {
    topic = await MySQLClient.executeQuery(
      await sql("SELECT_TOPICS_BY_TOPICS_ID.sql"),
      [topicId]
    )
    commentTitle = topic[0].comment_title
    
    chose = await MySQLClient.executeQuery(
      await sql("SELECT_CHOSE_BY_TOPICS_ID.sql"),
      [topicId]
    )

    // バリデーションチェック
    let error = validateData(data, commentTitle);
    if(error) {
      res.render("./survey-form.ejs", { error, topicId, data, chose});
      return;
    }

    res.render("./regist-confirm.ejs", { topicId, data, chose });

  } catch (err) {
    next(err);
  }
})

// 回答実行
router.post("/regist/execute", async (req, res, next) => {
  let topic, chose
  let { topicId } = req.body
  let data = createDate(req);
  try {

    // 挿入前に不正パラメータでないか確認
    topic = await MySQLClient.executeQuery(
      await sql("SELECT_TOPICS_BY_TOPICS_ID.sql"),
      [topicId]
    )
    chose = await MySQLClient.executeQuery(
      await sql("SELECT_CHOSE_BY_TOPICS_ID_CHOSE.sql"),
      [topicId, data.chose]
    )

    if(topic.length === 0 || chose.length === 0) {
      next(err);
    }

    await MySQLClient.executeQuery(
      await sql("INSERT_COMMENT.sql"),
      [topicId, data.chose, data.comment, data.nickname]
    )
    await MySQLClient.executeQuery(
      await sql("UPDATE_AGREE_BY_CHOSE.sql"),
      [topicId, data.chose]
    )

    res.redirect(`/survey/regist/complete?topicId=${topicId}`);

  } catch (err) {
    next(err);
  }
})

// 回答からのリダイレクト
router.get("/regist/complete", (req, res, next) => {
  res.render("./regist-complete.ejs", { topicId: req.query.topicId });
})

// 結果
router.get("/result/:topicId(\\d+)", async (req, res, next) => {
  let topicId = req.params.topicId;
  let chose = [];
  let agree = [];

  try {
    datas = await MySQLClient.executeQuery(
      await sql("SELECT_CHOSE_BY_TOPICS_ID.sql"),
      [topicId]
    )
    comments = await MySQLClient.executeQuery(
      await sql("SELECT_COMMENT_BY_TOPICS_ID.sql"),
      [topicId]
    )
    
    if(datas.length === 0 || comments.length === 0) {
      throw new Error();
    }

    for (let data of datas) {
      chose.push(data.chose)
      agree.push(data.agree)
    }

    res.render("./survey-result.ejs", { chose, agree, comments });

  } catch (err) {
    next(err);
  }
})

module.exports = router;