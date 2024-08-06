import Product from '../model/Product.js';

const createProduct = async (productData) => {
  const { title, description, price, image, category, images, seller } = productData;

  if (!title || !description || !price || !image || !category || !images) {
    throw new Error("Please enter all information!");
  }

  let product = await Product.findOne({ description });
  if (product) {
    throw new Error("A product with the same description already exists!");
  }

  product = new Product({
    title,
    description,
    price,
    image,
    category,
    images,
    seller,
  });

  return await product.save();
};

const getProduct = async (id) => {
  const product = await Product.findOne({ _id: id });
  if (!product) {
    throw new Error("Product not found!");
  }
  return product;
};

const getProducts = async () => {
  const products = await Product.find();
  if (!products || products.length === 0) {
    throw new Error("No products yet!");
  }
  return products;
};

const getProductByCategory = async (category) => {
  const products = await Product.find({ category });
  if (!products || products.length === 0) {
    throw new Error(`No products found in category: ${category}`);
  }
  return products;
};

const updateProduct = async (id, updateData) => {
  const product = await Product.findByIdAndUpdate(id, updateData, { new: true });
  if (!product) {
    throw new Error("Product not found!");
  }
  return product;
};

export default {
  createProduct,
  getProduct,
  getProducts,
  getProductByCategory,
  updateProduct,
};
