const { CategoryDao } = require('../infra')

const api = {}

api.list = async (req, res) => {
  console.log('####################################');
  
  console.log(`Listing categories`);
  const categories = await new CategoryDao(req.db)
      .listAll();
  
      res.json(categories);
}

module.exports = api;