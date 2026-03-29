import { root } from "../main";

let currentStateIndex = -1;
let stateValue = [];

const renderApp = () => {
  root.render(<UseStateFromScratch />);
};

const useState = (initialValue) => {
  currentStateIndex++;

  const callIndex = Number(currentStateIndex);

  if (stateValue[callIndex] === undefined) stateValue[callIndex] = initialValue;

  console.log("Initial State : ", stateValue);

  const setStateValue = (newValue) => {
    if (typeof newValue === "function") {
      stateValue[callIndex] = newValue(stateValue[callIndex]);
    } else stateValue[callIndex] = newValue;
    renderApp();
  };

  return [stateValue[callIndex], setStateValue];
};

const UseStateFromScratch = ({ name }) => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  return (
    <>
      <h1 className="text-7xl w-full mx-14 mt-5">counter:{name}</h1>
      <p className="text-4xl w-full mx-14 mt-5">count: {counter}</p>
      <button
        className="text-4xl w-sm mx-14 mt-5 cursor-pointer rounded-md bg-amber-300 hover:bg-amber-700 hover:text-white p-2"
        type="button"
        onClick={() => setCounter((prev) => prev + 1)}
      >
        increase
      </button>
      <button
        className="text-4xl w-sm mx-14 mt-5 cursor-pointer rounded-md bg-amber-300 hover:bg-amber-700 hover:text-white mb-12 p-2"
        type="button"
        onClick={() => setCounter((prev) => prev - 1)}
      >
        decrease
      </button>

      {/* COUNTER SECOND */}
      <h1 className="text-7xl w-full mx-14 mt-5">counter:{name}</h1>
      <p className="text-4xl w-full mx-14 mt-5">count: {counter2}</p>
      <button
        className="text-4xl w-sm mx-14 mt-5 cursor-pointer rounded-md bg-amber-300 hover:bg-amber-700 hover:text-white p-2"
        type="button"
        onClick={() => setCounter2((prev) => prev + 1)}
      >
        increase
      </button>
      <button
        className="text-4xl w-sm mx-14 mt-5 cursor-pointer rounded-md bg-amber-300 hover:bg-amber-700 hover:text-white mb-12 p-2"
        type="button"
        onClick={() => setCounter2((prev) => prev - 1)}
      >
        decrease
      </button>
    </>
  );
};

export default UseStateFromScratch;
