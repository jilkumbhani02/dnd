import React, { useRef } from "react";
import Child from "./Child";

const Parent = () => {
  const ref = useRef();

  return (
    <div>
      <button onClick={() => ref.current.Click()}>Click me</button>
      <Child ref={ref} />
    </div>
  );
};

export default Parent;
