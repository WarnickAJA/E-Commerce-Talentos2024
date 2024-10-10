const express = require('express');
const {
  handleGetProducts,
  handleGetProductById,
  handleGetProductByName,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
} = require('../handlers/productHandler');

const router = express.Router();

//revisar como mejorar esto para no usar /name
router.route('/').get(handleGetProducts).post(handleCreateProduct);
router.route('/name').get(handleGetProductByName);
router.route('/:id').get(handleGetProductById).put(handleUpdateProduct).delete(handleDeleteProduct);

module.exports = router;
