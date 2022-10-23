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
) SELECT 'bugs', 'eduardo.bugs@gmail.com.br', '123', 'Eduardo Bugs' WHERE NOT EXISTS (SELECT * FROM user WHERE user_name = 'bugs')
`;

const INSERT_DEFAULT_USER_2 = `
INSERT INTO user (
    user_name, 
    user_email,
    user_password,
    user_full_name
) SELECT 'guest', 'guest@alurageek.com.br', '123', 'Guest' WHERE NOT EXISTS (SELECT * FROM user WHERE user_name = 'guest')
`;

const INSERT_DEFAULT_USER_3 = `
INSERT INTO user (
    user_name, 
    user_email,
    user_password,
    user_full_name
) SELECT 'admin', 'admin@alurageek.com.br', '123456789', 'Admin' WHERE NOT EXISTS (SELECT * FROM user WHERE user_name = 'admin')
`;

const CATEGORY_SCHEMA = `
CREATE TABLE IF NOT EXISTS category (
    category_id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_name TEXT DEFAULT ('') NOT NULL
)
`;

const INSERT_DEFAULT_CATEGORY_1 = `
INSERT INTO category (
    category_name
) SELECT 'Star Wars' WHERE NOT EXISTS (SELECT * FROM category WHERE category_name = 'Star Wars')
`;

const INSERT_DEFAULT_CATEGORY_2 = `
INSERT INTO category (
    category_name
) SELECT 'Consoles' WHERE NOT EXISTS (SELECT * FROM category WHERE category_name = 'Consoles')
`;

const INSERT_DEFAULT_CATEGORY_3 = `
INSERT INTO category (
    category_name
) SELECT 'Diversos' WHERE NOT EXISTS (SELECT * FROM category WHERE category_name = 'Diversos')
`;

const PRODUCT_SCHEMA = `
CREATE TABLE IF NOT EXISTS product (
    product_id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_create_date TIMESTAMP DEFAULT current_timestamp, 
    product_name TEXT DEFAULT ('') NOT NULL, 
    product_description TEXT DEFAULT (''),
    product_price INTEGER NOT NULL,
    product_img_url TEXT NOT NULL, 
    category_id INTEGER,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES user(user_id) ON DELETE CASCADE,
    FOREIGN KEY(category_id) REFERENCES category(category_id) ON DELETE CASCADE
)
`;

const PREPARE_INSERT_PRODUCT = `
INSERT INTO product (
    product_name,
    product_description,
    product_price,
    product_img_url,
    category_id,
    user_id
) SELECT ?, ?, ?, ?, ?, ? WHERE NOT EXISTS (SELECT * FROM product WHERE product_id = ?)`;

const PRODUCT_DEFAULT_DESCRIPTION = `
  Lorem ipsum dolor sit amet. Aut libero rerum in quaerat iste ut reiciendis numquam rem illum doloremque sed 
  aliquam harum et sunt rerum.
`;

db.serialize(() => {
  db.run("PRAGMA foreign_keys=ON");
  db.run(USER_SCHEMA);
  db.run(INSERT_DEFAULT_USER_1);
  db.run(INSERT_DEFAULT_USER_2);
  db.run(INSERT_DEFAULT_USER_3);
  db.run(CATEGORY_SCHEMA);
  db.run(INSERT_DEFAULT_CATEGORY_1);
  db.run(INSERT_DEFAULT_CATEGORY_2);
  db.run(INSERT_DEFAULT_CATEGORY_3);
  db.run(PRODUCT_SCHEMA);

  for (var i = 1; i < 7; i++) {
    var urlImage = "/uploads/imgs/produto_".concat(i.toString());
    db.run(PREPARE_INSERT_PRODUCT, "Produto XYZ", PRODUCT_DEFAULT_DESCRIPTION, 6000, urlImage, 1, 3, i);
  }

  for (var i = 7; i < 13; i++) {
    var urlImage = "/uploads/imgs/produto_".concat(i.toString());
    db.run(PREPARE_INSERT_PRODUCT, "Produto XYZ", PRODUCT_DEFAULT_DESCRIPTION, 6000, urlImage, 2, 3, i);
  }
  
  for (var i = 13; i < 19; i++) {
    var urlImage = "/uploads/imgs/produto_".concat(i.toString());
    db.run(PREPARE_INSERT_PRODUCT, "Produto XYZ", PRODUCT_DEFAULT_DESCRIPTION, 6000, urlImage, 3, 3, i);
  }

  db.each("SELECT * FROM user", (err, user) => {
    console.log("User");
    console.log(user);
  });

  db.each("SELECT * FROM category", (err, category) => {
    console.log("Category");
    console.log(category);
  });

  db.each("SELECT * FROM product", (err, product) => {
    console.log("Product");
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
