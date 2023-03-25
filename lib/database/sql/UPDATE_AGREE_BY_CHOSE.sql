UPDATE
  chose
SET
  agree = agree + 1
WHERE
  topics_id = ?
AND
  chose = ?;