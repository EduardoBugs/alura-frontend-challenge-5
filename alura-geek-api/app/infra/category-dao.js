const categoryConverter = (row) => ({
  name: row.product_category
});

class CategoryDao {
  constructor(db) {
    this._db = db;
  }

  listAll() {
    return new Promise((resolve, reject) => {
      this._db.all(
        `SELECT DISTINCT product_category
        FROM product
        ORDER BY product_category;`,
        (err, rows) => {
          if (err) {
            console.log(err);
            return reject("Can`t list categories");
          }
          if (rows) {
            const categories = rows.map(categoryConverter);
            console.log("categorias retornadas");
            resolve(categories);
          } else {
            resolve(null);
          }
        }
      );
    });
  }
}

module.exports = CategoryDao;
