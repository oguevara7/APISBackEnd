const mongoose = require('mongoose')

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    required: true
  }
})

const Product = mongoose.model('Product', productsSchema)

module.exports = Product
