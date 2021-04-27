const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint


router.get('/', (req, res) => {
  Tag.findAll().then((productData) => {
    res.json(productData);
  });
});

// get one product

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id).then((tagData) => {
    res.json(tagData);
  });
});


router.post('/', (req, res) => {
  Post.create({
    id: req.body.id,
    tag_name: req.body.tag_name,
    
  })
    .then((newTag) => {
      
      res.json(newTag);
    })
    .catch((err) => {
      res.json(err);
    });
});
  
  router.put('/:id', (req, res) => {
    Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
      .then((updatedTag) => {
        // Sends the updated book as a json response
        res.json(updatedTag);
      })
      .catch((err) => res.json(err));
  });
  
  router.delete('/:id', (req, res) => {
    Tag.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((deletedTag) => {
        res.json(deletedTag);
      })
      .catch((err) => res.json(err));
  });



module.exports = router;
