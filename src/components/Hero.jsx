import { useCaraousel } from "../hooks/useCarousel";
import { useHeroProducts } from "../hooks/useHeroProducts";
import HeroUI from "./HeroUI";

const Hero = () => {
  const { products, loading, error } = useHeroProducts("mobile-accessories");
  const { currentIndex, goTo } = useCaraousel(products?.length || 0);
  if (loading) return <h1>Loading Products</h1>;
  if (error) return <h1>Sorry for inconvinience</h1>;
  return (
    <div className=" px-4 md:px-8">
      <HeroUI products={products} currentIndex={currentIndex} onChange={goTo} />
    </div>
  );
};

export default Hero;
