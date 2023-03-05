module.exports = {
  HOST: process.env.MYSQL_HOST || "127.0.0.1",
  PORT: process.env.MYSQL_PORT || "8889",
  USERNAME: process.env.MYSQL_USERNAME || "root",
  PASSWORD: process.env.MYSQL_PASSWORD || "root",
  DATABASE: process.env.MYSQL_DATABASE || "tmp_pollapp",
  CONNECTION_LIMIT: process.env.MYSQL_CONNECTION_LIMIT ? parseInt(process.env.MYSQL_CONNECTION_LIMIT) : 10,
  QUEUE_LIMIT: process.env.MYSQL_QUEUE_LIMIT ? parseInt(process.env.QUEUE_LIMIT) : 0
};