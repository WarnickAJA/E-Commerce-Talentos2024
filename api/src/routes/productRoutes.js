// routes/productRoutes.js

const express = require('express');
const {
  handleGetProducts,
  handleGetProductById,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
} = require('../handlers/productHandler');

const router = express.Router();

router.route('/').get(handleGetProducts).post(handleCreateProduct);
router.route('/:id').get(handleGetProductById).put(handleUpdateProduct).delete(handleDeleteProduct);

module.exports = router;
