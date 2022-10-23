const { productAPI } = require('../api'),
      { categoryAPI } = require('../api'),
      { wrapAsync } = require('../infra')

module.exports = app => {

    app.route('/categorias')
        .get(wrapAsync(categoryAPI.list));

    app.route('/categorias/:categoryId')
        .get(wrapAsync(productAPI.listByCategory));
};