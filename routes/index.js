const router = require("express").Router();

// トピック一覧を取得して表示
router.get("/", async (req, res) => {
  
  res.render("./index.ejs");
})

// 改版履歴画面
router.get("/history", async (req, res) => {
  res.render("./survey-history.ejs");
})

module.exports = router;