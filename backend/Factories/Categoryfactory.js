import Category from '../model/Category.js';

const createCategory = ({ name, image, description }) => {
  if (!name || !image) {
    throw new Error("Name and image are required fields!");
  }

  return new Category({ name, image, description });
};

export default {
  createCategory,
};
