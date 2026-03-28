import ProductAPI from "../../configs";

export const getHeroProduct = async (id) => {
  const res = await fetch(
    ProductAPI.apiBaseDomain +
      ProductAPI.getSingleProduct.replace("{{product_id}}", id),
  );
  const jsonRes = await res.json();
  return jsonRes;
};

export const getHeroCarouselProducts = async (category) => {
  const apiUrl =
    ProductAPI.apiBaseDomain +
    ProductAPI.getProductsByCategory.replace("{{category}}", category);
  const res = await fetch(apiUrl);
  const jsonRes = await res.json();
  return jsonRes?.products?.slice(0, 4) || [];
};

export const getAllCategories = async () => {
  const apiUrl = ProductAPI.apiBaseDomain + ProductAPI.getAllCategories;
  const res = await fetch(apiUrl);
  return await res.json();
};
