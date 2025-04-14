import React, { useReducer } from "react";

const Redu = () => {
  const reducer = (state, action) => {
    if (action.type === "Change") {
      return {
        name: "krish",
        email: "krish@gmail.com",
        password: "5678",
      };
    }
    if (action.type === "ChangeAgain") {
      return {
        name: "Elijah",
        email: "Elijah@gmail.com",
        password: "1478",
      };
    }
  };

  const initialState = {
    name: "jil",
    email: "jil@gmail.com",
    password: "1234",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.name}</h1>
      <h1>{state.email}</h1>
      <h1>{state.password}</h1>
      <button onClick={() => dispatch({ type: "Change" })}>Change</button>
      <button onClick={() => dispatch({ type: "ChangeAgain" })}>
        Change Again
      </button>
    </div>
  );
};

export default Redu;
