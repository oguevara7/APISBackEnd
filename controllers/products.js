const Product = require('../models/products')

const createProduct = function(req, res) {
  const pro = new Product(req.body)
  pro.save().then(function() {
    return res.send(pro)
  }).catch(function(error) {
    return res.status(400).send(error)
  })
}

const getProducts = function(req, res) {
  Product.find({}).then(function(pros) {
    res.send(pros)
  }).catch(function(error){
    res.status(500).send(error)
  })
}

const deleteProduct = function(req, res) {
  const _id = req.params.id
  Product.findByIdAndDelete(_id).then(function(pro){
    if(!pro) {
      return res.status(404).send()
    }
    return res.send(pro)
  }).catch(function(error) {
    res.status(505).send(error)
  })
}

module.exports = {
  createProduct: createProduct,
  getProducts: getProducts,
  deleteProduct: deleteProduct
}
