import React, { useEffect, useLayoutEffect, useState } from "react";

const Layout = () => {
  const [num, setNum] = useState(0);

  useLayoutEffect(() => {
    if (num === 0) {
      setNum(Math.floor(Math.random() * 50000));
    }
  }, [num]);

  return (
    <div>
      <h2>{num}</h2>
      <button onClick={() => setNum(0)}>Check</button>
    </div>
  );
};

export default Layout;

// useEffect is asyncronus (first render and update) and
// useLayoutEffect is syncronus (first update and then render)
