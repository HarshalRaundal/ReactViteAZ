import { Component } from "react";

function withCounter(ChildComponent) {
  return class NewComponent extends Component {
    constructor() {
      super();
      this.state = {
        counter: 0,
      };
      this.decreaseCounter = this.decreaseCounter.bind(this); //Bind in Constructor (Recommended for class components)
      this.increaseCounter = this.increaseCounter.bind(this);
    }

    decreaseCounter() {
      this.setState((prevState) => ({ counter: prevState.counter - 1 }));
    } //Methods are not auto-bound to the class instance.Unlike some frameworks, React does not bind this for you.

    increaseCounter() {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }

    render() {
      return (
        <ChildComponent
          decreaseCounter={this.decreaseCounter}
          increaseCounter={this.increaseCounter}
          counter={this.state.counter}
          {...this.props}
        />
      );
    }
  };
}

export default withCounter;
