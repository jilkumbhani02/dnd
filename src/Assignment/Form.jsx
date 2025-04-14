import React, { useReducer } from "react";

const initialState = {
  currentStep: 1,
  formData: {
    name: "",
    email: "",
    city: "",
    zip: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value,
        },
      };
    case "NEXT_STEP":
      return {
        ...state,
        currentStep: state.currentStep + 1,
      };
    case "PREV_STEP":
      return {
        ...state,
        currentStep: state.currentStep - 1,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export default function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentStep, formData } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const next = () => dispatch({ type: "NEXT_STEP" });
  const prev = () => dispatch({ type: "PREV_STEP" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
    dispatch({ type: "RESET" });
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <h2>Step {currentStep}</h2>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <>
            <label>
              Name:
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Email:
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </>
        )}

        {currentStep === 2 && (
          <>
            <label>
              City:
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              ZIP:
              <input name="zip" value={formData.zip} onChange={handleChange} />
            </label>
          </>
        )}

        {currentStep === 3 && (
          <div>
            <h3>Confirm your details</h3>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}

        <div style={{ marginTop: 20 }}>
          {currentStep > 1 && (
            <button type="button" onClick={prev}>
              Back
            </button>
          )}
          {currentStep < 3 && (
            <button type="button" onClick={next}>
              Next
            </button>
          )}
          {currentStep === 3 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
  );
}
