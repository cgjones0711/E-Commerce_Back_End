const Product = require('../models/Product.js');
const Category = require('../models/Category');
const Tag = require('..//models/Tag');
const ProductTag = require('../models/ProductTag');

Product.belongsTo(Category, {

  foreignKey: 'category_id',
  ondDelete: 'Cascade'
  
});

Category.hasMany(Product, {

  foreignKey: 'category_id',
  ondDelete: "Cascade"
});

Product.belongsToMany(Tag, {
    
  foreignKey: 'product_id',
    through: {
      model: ProductTag,
      as:"productTags",
      unique: false
    },
    

  });

  Tag.belongsToMany(Product, {
 
    foreignKey: 'tag_id',
    through: {
      model: ProductTag,
      as:"productTags",
      unique: false
    },
    
  
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

