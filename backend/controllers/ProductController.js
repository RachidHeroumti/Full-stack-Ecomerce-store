import productService from '../Services/ProductService.js';

export const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct({
      ...req.body,
      seller: req.user._id,
    });
    res.status(200).json({ product });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await productService.getProduct(req.params.id);
    res.status(200).json({ product });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await productService.getProducts();
    res.status(200).json({ products });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

export const getProductByCategory = async (req, res) => {
  try {
    const products = await productService.getProductByCategory(req.params.category);
    res.status(200).json({ products });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await productService.updateProduct(req.params.id, req.body);
    res.status(200).json({ product });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: err.message });
  }
};
