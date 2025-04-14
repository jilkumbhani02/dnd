import React, { useRef } from "react";

const Ref = () => {
  const ref = useRef();

  const Change = () => {
    alert(ref.current.value);
    ref.current.style.color = "green";
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <button onClick={() => Change()}>change</button>
    </div>
  );
};

export default Ref;
