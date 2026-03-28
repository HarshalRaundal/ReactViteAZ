import { useEffect, useState } from "react";
import { getHeroCarouselProducts } from "../utils/functions";

export const useHeroProducts = (category) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let isMounted = true;
    const fetchProducts = async () => {
      try {
        const data = await getHeroCarouselProducts(category);

        const transformed = data.map((prod) => ({
          title: prod.title,
          category: prod.category,
          discount: Math.ceil(prod.discountPercentage),
          image: prod.images[0],
          price: prod.price,
          originalPrice: "$250.00",
          reviewsCount: prod.reviews.length,
          rating: prod.rating,
        }));

        if (isMounted) setProducts(transformed);
      } catch (err) {
        setError(err);
        console.log("Error fetching products: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [category]);

  return { products, loading, error };
};
