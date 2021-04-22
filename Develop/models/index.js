const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {

  through: {
    model: Tag, ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'misc_category'
});

Category.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Tag, ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'category_product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

