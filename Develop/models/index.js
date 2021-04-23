const Product = require('../Develop/models/Product.js');
const Category = require('../Develop/models/Category');
const Tag = require('../Develop/models/Tag');
const ProductTag = require('../Develop/models/ProductTag');

Product.belongsTo(Category, {

  foreignKey: 'product_id'
  
});

Category.haveMany(Product, {

  foreignKey: 'product_id',
  ondDelete:Cascade
});

Products.belongsToMany(Tag, {
    
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

