import { Component } from "react";
import { getHeroCarouselProducts } from "../utils/functions";

export class ReactClassComponent extends Component {
  constructor() {
    super();
    console.log("Constructor method");
    //Initialize state
    this.state = {
      products: [],
      currentIndex: 0,
    };
  }

  componentDidMount(prevProps, prevState) {
    //Runs once after first render
    console.log("component did mount");
    this.fetchProducts(this.props.category);
  }

  componentDidUpdate(prevProps) {
    console.log("component did update");
    if (prevProps.category !== this.props.category)
      this.fetchProducts(this.props.category);
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  async fetchProducts(category) {
    try {
      const data = await getHeroCarouselProducts(category);
      const transformed = data.map((prod) => ({
        id: prod.id,
        title: prod.title,
        category: prod.category,
        discount: Math.ceil(prod.discountPercentage),
        image: prod.images[0],
        price: prod.price,
        originalPrice: "$250.00",
        reviewsCount: prod.reviews.length,
        rating: prod.rating,
      }));

      this.setState({ products: transformed });
      return transformed;
    } catch (err) {
      console.log("Error fetching products: ", err);
    }
    return [];
  }

  render() {
    console.log("Render Method");
    const { category } = this.props;
    const { products } = this.state;
    return (
      <>
        <h1 className="text-xl font-bold font-mono text-center">
          Product Category : {category}
        </h1>
        <ul className="text-md font-sans w-full px-40">
          {products?.map((item, index) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </>
    );
  }
}
