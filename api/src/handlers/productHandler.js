// handlers/productHandler.js
const productController = require('../controllers/productController');

// Handler para obtener todos los productos
const handleGetProducts = async (req, res, next) => {
  try {
    await productController.getProducts(req, res);
  } catch (error) {
    next(error);
  }
};

// Handler para obtener un producto por ID
const handleGetProductById = async (req, res, next) => {
  try {
    await productController.getProductById(req, res);
  } catch (error) {
    next(error);
  }
};

// Handler para crear un nuevo producto
const handleCreateProduct = async (req, res, next) => {
  try {
    const { name, price, stock } = req.body;
    if (!name || !price || typeof stock !== 'number') {
      return res.status(400).json({ message: 'Nombre, precio y stock son requeridos' });
    }
    await productController.createProduct(req, res);
  } catch (error) {
    next(error);
  }
};

// Handler para actualizar un producto
const handleUpdateProduct = async (req, res, next) => {
  try {
    await productController.updateProduct(req, res);
  } catch (error) {
    next(error);
  }
};

// Handler para eliminar un producto
const handleDeleteProduct = async (req, res, next) => {
  try {
    await productController.deleteProduct(req, res);
  } catch (error) {
    next(error);
  }
};

// Exportando los handlers al final
module.exports = {
  handleGetProducts,
  handleGetProductById,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
};
