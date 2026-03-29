import React from "react";
import ReactClassCounter from "../components/ReactClassComponents/ReactClassCounter";
import ReactClassHoverCounter from "../components/ReactClassComponents/ReactClassHoverCounter";
import UseStateFromScratch from "../components/useStateFromScratch";

const ScratchPage = () => {
  return (
    <div>
      {/* <ReactClassCounter name="onclick counter" />
      <ReactClassHoverCounter name="hover counter" /> */}
      <UseStateFromScratch name="custom useState " />
    </div>
  );
};

export default ScratchPage;
