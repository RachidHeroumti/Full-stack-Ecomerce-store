import Product from '../model/Product.js';

const createProduct = (productData) => {
  const { title, description, price, image, category, images, seller } = productData;

  if (!title || !description || !price || !image || !category || !images) {
    throw new Error("Please enter all information!");
  }

  return new Product({
    title,
    description,
    price,
    image,
    category,
    images,
    seller,
  });
};

export default {
  createProduct,
};
