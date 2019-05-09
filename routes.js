const express = require('express')
const cors = require('cors')
const router = express.Router()

const products = require('./controllers/products.js')

router.all('*', cors())

router.post('/products', products.createProduct)
router.get('/products', products.getProducts)
router.patch('/products/:id', products.updateProduct)
router.delete('/products/:id', products.deleteProduct)

router.get('*', function(req, res) {
  res.send({
    error: 'This route does not exist.'
  })
})

module.exports = router
