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

// with pagination 
// const getProducts = async (page = 1, limit = 10) => {
//   // Ensure page and limit are positive integers
//   const pageNumber = Math.max(1, parseInt(page, 10)); // Default to 1 if invalid
//   const limitNumber = Math.max(1, parseInt(limit, 10)); // Default to 1 if invalid

//   try {
//     const products = await Product.find()
//       .skip((pageNumber - 1) * limitNumber) // Skip documents for previous pages
//       .limit(limitNumber); // Limit the number of documents returned

//     const totalProducts = await Product.countDocuments(); // Get total count of products
//     const totalPages = Math.ceil(totalProducts / limitNumber);

//     if (!products || products.length === 0) {
//       throw new Error("No products found!");
//     }

//     return {
//       products,
//       currentPage: pageNumber,
//       totalPages,
//       totalProducts,
//     };
//   } catch (error) {
//     throw new Error(error.message || "Failed to fetch products.");
//   }
// };

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

const searchProduct = async (query) => {
  try {
    const searchPattern = new RegExp(query, 'i');
    
    const products = await Product.find({
      $or: [
        { title: { $regex: searchPattern } },
        { description: { $regex: searchPattern } } 
      ]
    });

    if (!products || products.length === 0) {
      throw new Error(`No products found matching: ${query}`);
    }

    return products;
  } catch (error) {
    console.log("🚀 ~ searchProduct ~ error:", error);
    throw error;
  }
};

const filterProducts = async (query) => {

  try {
    const filterQuery = {};
    
    if (query.category) {
      filterQuery.category = query.category;
    }

    if (query.price && Array.isArray(query.price) && query.price.length === 2) {
      filterQuery.price = {
        $gte: query.price[0].toString(),
        $lte: query.price[1].toString()
      };
    }
    if (query.brands && query.brands.length > 0) {
      filterQuery.brands = { $in: query.brands };
    }
    console.log("🚀 ~ filterProducts ~ filterQuery:", filterQuery)
    const products = await Product.find(filterQuery);
    return products;
    
  } catch (error) {
    console.log("🚀  error:", error);
    throw error;
  }
};



export default {
  createProduct,
  getProduct,
  getProducts,
  getProductByCategory,
  updateProduct,
  searchProduct,
  filterProducts
};
