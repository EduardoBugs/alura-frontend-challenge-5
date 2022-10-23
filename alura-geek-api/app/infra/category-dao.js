const categoryConverter = (row) => ({
  id: row.category_id,
  name: row.category_name,
});

class CategoryDao {
  constructor(db) {
    this._db = db;
  }

  listAll() {
    return new Promise((resolve, reject) => {
      this._db.all(
        `SELECT * FROM category ORDER BY category_id;`,
        (err, rows) => {
          const categories = rows.map(categoryConverter);
          if (err) {
            console.log(err);
            return reject("Can`t list categories");
          }
          console.log("categorias retornadas");
          resolve(categories);
        }
      );
    });
  }
}

module.exports = CategoryDao;
