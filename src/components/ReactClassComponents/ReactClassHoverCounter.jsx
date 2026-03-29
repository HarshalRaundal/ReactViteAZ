import { Component } from "react";
import withCounter from "./withCounter";

class ReactClassHoverCounter extends Component {
  render() {
    const { name, counter, increaseCounter, decreaseCounter } = this.props;

    return (
      <>
        <h1 className="text-7xl w-full mx-14 mt-5">counter:{name}</h1>
        <p className="text-4xl w-full mx-14 mt-5">count: {counter}</p>
        <button
          className="text-4xl w-sm mx-14 mt-5 cursor-pointer rounded-md bg-amber-300 hover:bg-amber-700 hover:text-white p-2"
          type="button"
          onMouseEnter={increaseCounter}
        >
          increase
        </button>
        <button
          className="text-4xl w-sm mx-14 mt-5 cursor-pointer rounded-md bg-amber-300 hover:bg-amber-700 hover:text-white mb-12 p-2"
          type="button"
          onMouseEnter={decreaseCounter}
        >
          decrease
        </button>
      </>
    );
  }
}

export default withCounter(ReactClassHoverCounter);
