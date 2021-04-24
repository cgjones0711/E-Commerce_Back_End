const Product = require('../models/Product.js');
const Category = require('../models/Category');
const Tag = require('..//models/Tag');
const ProductTag = require('../models/ProductTag');

Product.belongsTo(Category, {

  foreignKey: 'product_id'
  
});

Category.hasMany(Product, {

  foreignKey: 'product_id',
  ondDelete: "Cascade"
});

Product.belongsToMany(Tag, {
    
    through: {
      model: ProductTag,
      unique: false
    },
    

  });

  Tag.belongsToMany(Product, {
 
    through: {
      model: ProductTag,
      unique: false
    },
    
  
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

