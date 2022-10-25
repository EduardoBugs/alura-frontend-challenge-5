const productConverter = (row) => ({
  id: row.product_id,
  name: row.product_name,
  description: row.product_description,
  price: row.product_price,
  img: row.product_img,
  category: row.product_category,
  userId: row.user_id
});

const maxRows = 18;

class ProductDao {
  constructor(db) {
    this._db = db;
  }

  listAll() {
    return new Promise((resolve, reject) => {
        this._db.all(`
            SELECT *
            FROM product
            ORDER BY product_name, product_create_date;
            `,
            (err, rows) => {
                const products = rows.map(productConverter)
                if (err) {
                    console.log(err);
                    return reject('Can`t list products');
                }
                console.log('produtos retornados');
                resolve(products);
            });
    });
  }

  listByCategory(category, limit) {
    return new Promise((resolve, reject) => {
        this._db.all(`
            SELECT *
            FROM product
            WHERE product_category = ?
            ORDER BY RANDOM()
            LIMIT ${limit} ;
            `,
            [category],
            (err, rows) => {
                if (err) {
                    console.log(err);
                    return reject('Can`t list products');
                }
                if (rows) {
                  const products = rows.map(productConverter);
                  console.log('produtos retornados');
                  return resolve(products);
                } else {
                  return resolve(null);
                }
            });
    });
  }

  add(product, user_id) {
    return new Promise((resolve, reject) => {
        this._db.run(`
            INSERT INTO product (
                product_create_date,
                product_name,
                product_description,
                product_price,
                product_img,
                product_category,
                user_id
            ) values (?,?,?,?,?,?,?)
        `,
            [
                new Date(),
                product.name,
                product.description,
                product.price,
                product.img,
                product.category,
                user_id
            ],
            function (err) {
                if (err) {
                    console.log(err);
                    return reject('Can`t add product');
                }
                resolve(this.lastID);
            });
    });
  }

  update(product, user_id) {
    console.log(product);
    return new Promise((resolve, reject) => {
        this._db.run(`
            UPDATE product
            SET product_name = ?,
                product_description = ?,
                product_price = ?,
                product_category = ?
            WHERE product_id = ?
        `,
            [
                product.name,
                product.description,
                product.price,
                product.categoryId,
                user_id
            ],
            function (err) {
                if (err) {
                    console.log(err);
                    return reject('Can`t update product');
                }
                resolve(this.lastID);
            });
    });
  }  

  findById(id) {
    return new Promise((resolve, reject) => this._db.get(`
        SELECT * FROM product WHERE product_id = ?;
        `,
        [id],
        (err, row) => {
            if (err) {
                console.log(err);
                return reject('Can`t find product');
            }
            if (row) {
                resolve(productConverter(row));
            } else {
                resolve(null);
            }
        }
    ));
  }

  remove(id) {
    return new Promise((resolve, reject) => this._db.run(
        `DELETE FROM product where product_id = ?`,
        [id],
        err => {
            if (err) {
                console.log(err);
                return reject('Can`t remove product');
            }
            resolve();
        }
    ));
  }
}

module.exports = ProductDao;
