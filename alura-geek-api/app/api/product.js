const { ProductDao } = require('../infra')
    , jimp = require('jimp')
    , path = require('path')
    , fs = require('fs')
    , unlink = require('util').promisify(fs.unlink);

const api = {}

const userCanEditDelete = user => product => product.userId == user.id;

const defaultExtension = '.jpg';

api.list = async (req, res) => {
  console.log('####################################');
  
  console.log(`Listing produtcs`);
  const products = await new ProductDao(req.db)
      .listAll();
  
      res.json(products);
}

api.listCategories = async (req, res) => {
  console.log('####################################');
  
  console.log(`Listing categories`);
  const products = await new ProductDao(req.db)
      .listCategories();
  
      res.json(products);
}

api.listByCategory = async (req, res) => {
  console.log('####################################');
  const { categoryId } = req.params;
  const { limit } = req.query;
  
  console.log(`Listing produtcs`);
  const products = await new ProductDao(req.db)
      .listByCategory(categoryId, limit);

  res.json(products);
}

api.add = async (req, res) => {
  console.log('####################################');
  console.log('Received JSON data', req.body);

  const product = req.body;
  product.file = '';

  const id = await new ProductDao(req.db).add(product, req.user.id);
  res.json(id);
};

api.addUpload = async (req, res) => {
  console.log('upload complete');
  console.log('Product data', req.body);
  console.log('File info', req.file);

  const image = await jimp.read(req.file.path);

  await image
      .rotate(0)
      .cover(460, 460)
      .autocrop()
      .write(req.file.path);

  const product = req.body;
  product.img = await image.getBase64Async(jimp.AUTO);

  await new ProductDao(req.db).add(product, req.user.id);
  
  res.status(200).end();       
};

api.findById = async (req, res) => {
  const { productId } = req.params;

  console.log('####################################');
  console.log(`Finding product for ID ${productId}`)

  const product = await new ProductDao(req.db).findById(productId);
  if(product) {
      res.json(product);
  } else {
      res.status(404).json({ message: 'Product does not exist'})
  }  
};

api.remove = async (req, res) => {
  const user = req.user;
  const { productId } = req.params;
  const dao = new ProductDao(req.db);
  const product = await dao.findById(productId);

  if(!product) {
      const message = 'Product does not exist';
      console.log(message);
      return res.status(404).json({ message });
  }
  
  if(userCanEditDelete(user)(product)) {
      await dao.remove(productId)
      console.log(`Product ${productId} deleted!`);
      res.status(200).end();

  } else {
      console.log(`
          Forbiden operation. User ${user.id} 
          cannot delete product from user ${product.userId}
      `);
      res.status(403).json({ message: 'Forbidden'});
  }
};

api.update = async (req, res) => {
  const user = req.user;
  const { productId } = req.params;
  const dao = new ProductDao(req.db);
  const product = await dao.findById(productId);

  if(!product) {
      const message = 'Product does not exist';
      console.log(message);
      return res.status(404).json({ message });
  }
  
  if(userCanEditDelete(user)(product)) {
      await dao.update(productId)
      console.log(`Product ${productId} updated!`);
      res.status(200).end();

  } else {
      console.log(`
          Forbiden operation. User ${user.id} 
          cannot update product from user ${product.userId}
      `);
      res.status(403).json({ message: 'Forbidden'});
  }
};

module.exports = api;