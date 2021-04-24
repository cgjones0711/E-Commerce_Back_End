const Product = require('../models/Product.js');
const Category = require('../models/Category');
const Tag = require('..//models/Tag');
const ProductTag = require('../models/ProductTag');

Product.belongsTo(Category, {

  foreignKey: 'product_id'
  
});

Category.haveMany(Product, {

  foreignKey: 'product_id',
  ondDelete: Cascade
});

Product.belongsToMany(Tag, {
    
    through: {
      model: ProductTag,
      unique: false
    },
    
    as: 'product_tag'
  });

  Tag.belongsToMany(Product, {
 
    through: {
      model: ProductTag,
      unique: false
    },
    
    as: 'tag_product'
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

