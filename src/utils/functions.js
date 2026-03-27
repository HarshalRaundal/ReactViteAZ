import ProductAPI from "../../configs";

export const getHeroProduct = async (id) => {
  const res = await fetch(
    ProductAPI.apiBaseDomain +
      ProductAPI.getSingleProduct.replace("{{product_id}}", id),
  );
  const jsonRes = await res.json();
  //   console.log("Response : ", jsonRes);
  return jsonRes;
};

export const getHeroCarouselProducts = async (category) => {
  const apiUrl =
    ProductAPI.apiBaseDomain +
    ProductAPI.getProductsByCategory.replace("{{category}}", category);
  console.log("API url: ", apiUrl);
  const res = await fetch(apiUrl);
  const jsonRes = await res.json();
  // console.log("Response : ", jsonRes?.products?.slice(0, 4));
  return jsonRes?.products?.slice(0, 4) || [];
};

export const getAllCategories = async () => {
  const apiUrl = ProductAPI.apiBaseDomain + ProductAPI.getAllCategories;
  console.log("API url: ", apiUrl);
  const res = await fetch(apiUrl);
  return await res.json();
};
