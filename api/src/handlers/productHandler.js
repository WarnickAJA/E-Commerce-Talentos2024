const {
  getProducts,
  getProductById,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');


const handleGetProducts = async (req, res, next) => {
  try {
    const products = await getProducts();
    if (!products) {
      return res.status(404).json({ message: 'Products not found' });
    }
    res.status(200).json(products);
  } catch (error) {
    if (error.name === 'CastError' || error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    next(error);
  }
};


const handleGetProductById = async (req, res, next) => {
  try {
    const product = await getProductById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const handleGetProductByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    if (!name) {
      return res.status(400).json({ message: 'El nombre es requerido' });
    }
    const product = await getProductByName(name);
    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.status(200).json(product);
  } catch (error) {
    next(error); 
  }
};
const handleCreateProduct = async (req, res, next) => {
  try {
    const { name, price, stock } = req.body;

    if (!name) {
      return res.status(400).json({ message: 'El nombre es requerido' });
    }
    if (!price) {
      return res.status(400).json({ message: 'El precio es requerido' });
    }
    if (typeof stock !== 'number') {
      return res.status(400).json({ message: 'El stock debe ser un n mero' });
    }

    const product = await createProduct(name, price, stock);
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

const handleUpdateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await updateProduct(req.params.id, req.body);
    res.status(200).json({ message: 'Producto modificado exitosamente: ', updatedProduct });
  } catch (error) {
    next(error);
  }
};


const handleDeleteProduct = async (req, res, next) => {
  try {
    const deletedProduct = await deleteProduct(req.params.id);
    res.status(200).json({ message: 'Product deleted successfully', deletedProduct });
  } catch (error) {
    next(error);
  }
};


module.exports = {
  handleGetProducts,
  handleGetProductById,
  handleGetProductByName,
  handleCreateProduct,
  handleUpdateProduct,
  handleDeleteProduct,
};
