// controllers/productController.js

const Product = require('../models/Product');

// Controlador para obtener todos los productos
const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

// Controlador para obtener un producto por ID
const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
};

// Controlador para crear un nuevo producto
const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  const product = new Product({ name, price, stock });
  await product.save();
  res.status(201).json(product);
};

// Controlador para actualizar un producto
const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
};

// Controlador para eliminar un producto
const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json({ message: 'Product deleted successfully' });
};

// Exportando los controladores al final
module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
