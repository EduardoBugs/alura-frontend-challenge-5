const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("data.db");

const USER_SCHEMA = `
CREATE TABLE IF NOT EXISTS user (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT, 
    user_name VARCHAR(30) NOT NULL UNIQUE, 
    user_email VARCHAR(255) NOT NULL, 
    user_password VARCAHR(255) NOT NULL,
    user_full_name VARCAHR(40) NOT NULL, 
    user_join_date TIMESTAMP DEFAULT current_timestamp
)
`;

const INSERT_DEFAULT_USER_1 = `
INSERT INTO user (
    user_name, 
    user_email,
    user_password,
    user_full_name
) SELECT 'bugs', 'eduardo.bugs@gmail.com', '1234', 'Eduardo Bugs' WHERE NOT EXISTS (SELECT * FROM user WHERE user_name = 'bugs')
`;

const INSERT_DEFAULT_USER_2 = `
INSERT INTO user (
    user_name, 
    user_email,
    user_password,
    user_full_name
) SELECT 'guest', 'guest@alurageek.com.br', '1234', 'Guest' WHERE NOT EXISTS (SELECT * FROM user WHERE user_name = 'guest')
`;

const INSERT_DEFAULT_USER_3 = `
INSERT INTO user (
    user_name, 
    user_email,
    user_password,
    user_full_name
) SELECT 'admin', 'admin@alurageek.com.br', '1234', 'Admin' WHERE NOT EXISTS (SELECT * FROM user WHERE user_name = 'admin')
`;

const PRODUCT_SCHEMA = `
CREATE TABLE IF NOT EXISTS product (
    product_id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_create_date TIMESTAMP DEFAULT current_timestamp, 
    product_name TEXT DEFAULT ('') NOT NULL, 
    product_description TEXT DEFAULT (''),
    product_price INTEGER NOT NULL,
    product_img TEXT NOT NULL, 
    product_category TEXT NOT NULL,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES user(user_id) ON DELETE CASCADE
)
`;

db.serialize(() => {
  db.run("PRAGMA foreign_keys=ON");

  db.run(USER_SCHEMA);
  db.run(INSERT_DEFAULT_USER_1);
  db.run(INSERT_DEFAULT_USER_2);
  db.run(INSERT_DEFAULT_USER_3);
  db.run(PRODUCT_SCHEMA);

  db.each("SELECT * FROM user", (err, user) => {
    console.log("User");
    console.log(user);
  });

  db.each("SELECT * FROM product", (err, product) => {
    console.log("product");
    console.log(product);
  });  
 
});

process.on("SIGINT", () =>
  db.close(() => {
    console.log("Database closed");
    process.exit(0);
  })
);

module.exports = db;
