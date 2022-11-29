// path: ./config/database.js

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "dpg-ce2t5q5a4994v9a4bk6g-a"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "uneuro"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "R@mus1997"),
    },
    debug: false,
  },
});
