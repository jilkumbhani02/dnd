import React, { forwardRef, useImperativeHandle } from "react";

const Child = (props, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return {
        Click,
      };
    },
    []
  );
  const Click = () => {
    alert("done");
  };

  return <div>child</div>;
};

export default forwardRef(Child);
