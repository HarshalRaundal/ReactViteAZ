import StarHalf from "@mui/icons-material/StarHalf";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useEffect, useState } from "react";
import heroImg from "/assets/images/hero-product.png";
import { getHeroCarouselProducts, getHeroProduct } from "../utils/functions";
import StarBorder from "@mui/icons-material/StarBorder";
import carouselStyles from "../assets/styles/hero-carousel.module.css";

const Hero = () => {
  const [carouselProducts, setCarouselProducts] = useState([]);
  const [currentProductIndex, setCurrentProductIndex] = useState(1);
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentProductIndex((prev) => (prev + 1) % 4);
    }, 2000);

    setCarouselProducts([]);
    const productsData = getHeroCarouselProducts("laptops")
      .then((data) => {
        data.map((prod) => {
          const {
            title,
            category,
            rating,
            discountPercentage,
            images,
            price,
            reviews,
            thumbnail,
          } = prod;
          setCarouselProducts((prev) => [
            ...prev,
            {
              title: title,
              category: category,
              discount: Math.ceil(discountPercentage),
              image: images[0],
              price: price,
              originalPrice: "$250.00",
              reviewsCount: reviews.length,
              rating: rating,
            },
          ]);
        });
      })
      .catch((err) => console.log("Error fetching products"));
    return () => {
      clearTimeout(carouselInterval);
    };
  }, []);

  return (
    <div className="bg-gray-100 rounded-xl p-4 md:py-8 md:px-0   md:pe-10 xl:pe-28 min-h-1/2 md:flex items-center justify-center">
      <div className="w-full xl:w-1/2 flex-row md:flex ">
        <div
          className={`${carouselStyles["carousel-pagination"]} md:flex md:flex-col justify-center md:justify-around items-center gap-10 md:gap-2 md:px-8 text-gray-500 hidden`}
        >
          {new Array(carouselProducts?.length || 0)
            .fill()
            .map((item, index) => {
              return (
                <button
                  className={`${index == currentProductIndex ? carouselStyles.active : ""} cursor-pointer`}
                  key={`carousel-navigation-${index}`}
                  onClick={() => {
                    setCurrentProductIndex(index);
                  }}
                >
                  &#x2022;
                </button>
              );
            })}
        </div>
        <div>
          <h1 className=" text-3xl lg:text-4xl xl:text-7xl font-bold uppercase">
            Shop Computers & Accessories
          </h1>
          <p className="text-sm mt-3.5 font-medium">
            Shop laptops, desktops, monitors, tablets, PC, gaming, hard drives
            and storage accessories and more.
          </p>
          <button className="border p-2 w-36 mt-3.5 rounded-xl font-normal cursor-pointer hover:bg-black hover:text-white">
            View More
          </button>
        </div>
      </div>
      <div className=" w-full xl:w-1/2 flex md:flex-row relative min-h-60">
        <div className="p-4 bg-orange-500 rounded-full h-16 w-16  items-center justify-between text-white absolute right-5 md:-right-10 md:top-5 lg:top-10 xl:right-60 top-5 xl:top-20 z-(--hero-discount-z-index) hidden md:flex">
          {carouselProducts[currentProductIndex]?.discount}%
        </div>

        <img
          src={carouselProducts[currentProductIndex]?.image || heroImg}
          alt="hero product image- headphones"
          className=" absolute md:relative z-(--hero-img-z-index) w-sm sm:w-3/5 md:w-xl -top-2/5 -right-25 sm:right-0 md:-right-25 justify-self-end"
        />

        <div className="bg-white lg:w-sm px-4 mt-2 sm:mt-0 p-2 sm:py-8 rounded-2xl relative md:absolute  bottom-0.5 xl:bottom-15 z-0 xl:left-14 w-3/4 self-end">
          <div className=" text-xs w-3/4 lg:w-1/2">
            <h4 className="text-gray-600">
              {carouselProducts[currentProductIndex]?.category}
            </h4>
            <h2 className="text-sm font-medium line">
              {carouselProducts[currentProductIndex]?.title}
            </h2>
            <p className="text-gray-500 text-xs flex justify-baseline items-baseline gap-0.5 ">
              <span className="text-yellow-500 inline-flex w-fit -space-x-0.5 lg:mt-2">
                {new Array(
                  Number(
                    Math.floor(
                      Number(
                        carouselProducts[currentProductIndex]?.rating || 0,
                      ),
                    ),
                  ),
                )
                  .fill()
                  .map((item, index) => (
                    <StarRateIcon
                      sx={{ fontSize: 14 }}
                      key={`rating-fullstar-${index}`}
                    />
                  ))}

                {(carouselProducts[currentProductIndex]?.rating * 10) % 10 && (
                  <StarHalf sx={{ fontSize: 14 }} />
                )}

                {new Array(
                  Number(
                    5 -
                      Math.ceil(
                        Number(
                          carouselProducts[currentProductIndex]?.rating || 0,
                        ),
                      ),
                  ),
                )
                  .fill()
                  .map((item, index) => (
                    <StarBorder
                      sx={{ fontSize: 14 }}
                      key={`rating-empty-star-${index}`}
                    />
                  ))}
              </span>
              {carouselProducts[currentProductIndex]?.reviewsCount} reviews
            </p>
            <p className="text-lg font-bold">
              ${carouselProducts[currentProductIndex]?.price}
              <span className="text-xs ms-2 font-normal text-gray-500">
                $
                {(
                  Number(carouselProducts[currentProductIndex]?.price || 1) /
                  (1 -
                    Number(
                      carouselProducts[currentProductIndex]?.discount || 1,
                    ) /
                      100)
                ).toPrecision(4)}
              </span>
            </p>
            <div className="flex text-gray-600 mt-4 justify-start items-center gap-2 cursor-pointer">
              <p>View More</p>
              <span className="text-xl transform scale-x-150 font-bold">⟶</span>
            </div>
          </div>
        </div>
      </div>

      {/* caraousel mobile */}
      <div
        className={`${carouselStyles["carousel-pagination"]} flex md:flex-col justify-center md:justify-around items-center gap-10 md:gap-2 md:px-8 text-gray-500 mt-5 md:hidden`}
      >
        {new Array(carouselProducts?.length || 0).fill().map((item, index) => {
          return (
            <button
              className={`${index == currentProductIndex ? carouselStyles.active : ""} cursor-pointer`}
              key={`carousel-navigation-${index}`}
              onClick={() => {
                setCurrentProductIndex(index);
              }}
            >
              &#x2022;
            </button>
          );
        })}
        {/* <span className={carouselStyles.active}></span>
            <span>&#x2022;</span>
            <span>&#x2022;</span>
            <span>&#x2022;</span> */}
      </div>
    </div>
  );
};

export default Hero;
