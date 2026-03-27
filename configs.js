// https://dummyjson.com/docs/products#products-categories

const ProductAPI = {
  apiBaseDomain: "https://dummyjson.com",
  getSingleProduct: "/products/{{product_id}}",
  getProductsByCategory: "/products/category/{{category}}",
  getAllCategories: "/products/category-list",
};

export default ProductAPI;
