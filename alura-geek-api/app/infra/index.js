const ProductDao = require('./product-dao')
    , CategoryDao = require('./category-dao')
    , UserDao = require("./user-dao")
    , wrapAsync = require("./async-wrap")
    , auth = require("./auth");

module.exports = {
  ProductDao,
  CategoryDao,
  UserDao,
  wrapAsync,
  auth,
};
