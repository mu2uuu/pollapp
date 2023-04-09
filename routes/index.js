const router = require("express").Router();

// トピック一覧を取得して表示
router.get("/", async (req, res) => {
  
  res.render("./index.ejs");
})

module.exports = router;