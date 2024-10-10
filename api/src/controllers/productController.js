const Product = require('../models/Product');
const getProducts = async () => {
  const products = await Product.find();
  return products;
};

const getProductById = async (id) => {
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return product;
};

const getProductByName = async (name) => {
  const product = await Product.findOne({name });
  return product;
};

const createProduct = async ( name, price, stock ) => {
  const newProduct = new Product({ name, price, stock });
  const createdProduct = await newProduct.save();
  return createdProduct;
};

const updateProduct = async (id,productData) => {
  const product = await Product.findByIdAndUpdate(id, productData, {
    new: true,
    runValidators: true,
  });
  return product;
};


const deleteProduct = async (id) => {
  const product = await Product.findByIdAndDelete(id);
  return product;
};


module.exports = {
  getProducts,
  getProductById,
  getProductByName,
  createProduct,
  updateProduct,
  deleteProduct,
};
