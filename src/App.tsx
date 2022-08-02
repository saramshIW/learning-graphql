import React from "react";
import CountryDetailQuery from "./components/countryDetailQuery";

function App() {
  const [state, setState] = React.useState<string>("");
  // const [output, setOutput] = React.useState();

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <h2>Graph QL</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          onChange={(e) => setState(e.target.value.toUpperCase())}
        />
        <button type="submit">Search</button>
      </form>

      <p>User Input: {`${state}`}</p>
      <CountryDetailQuery countryName={state} />
    </div>
  );
}

export default App;
