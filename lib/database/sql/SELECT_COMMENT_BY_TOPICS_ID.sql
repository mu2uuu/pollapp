SELECT
  chose, comment, nickname, updated_at
FROM
  comment
WHERE
  topics_id = ?
ORDER BY updated_at DESC