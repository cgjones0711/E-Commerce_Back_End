const Product = require('./product.js');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {

  foreignKey: ''
  
});

Category.haveMany(Product, {

  foreignKey: '',
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
    
    as: 'tag_prodduct'
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

