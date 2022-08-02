import { gql } from "@apollo/client";
import React from "react";
import client from "./config/apolloClient";
import { GlobalContext } from "./context/globalContext";

function App() {
  const [state, setState] = React.useState<string>("");
  const [output, setOutput] = React.useState();
  const globalContext = React.useContext(GlobalContext);
  React.useEffect(() => {
    client
      .query({
        query: gql`
      query GetCountry {
        country(code: "${globalContext?.userInput}") {
          __typename
            name
            capital
            emoji
          }
      }
      `,
      })
      .then((data: any) => setOutput(data.data))
      .catch((error) => console.log(error));
  }, [globalContext?.userInput]);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    if (globalContext) globalContext?.setUserInput(state);
  };
  return (
    <div className="App">
      <h2>Graph QL</h2>
      <form onSubmit={onSubmitHandler}>
        <input type="text" onChange={(e) => setState(e.target.value)} />
        <button type="submit">Search</button>
      </form>

      <p>User Input: {`${globalContext?.userInput}`}</p>
      <p>{JSON.stringify(output)}</p>
    </div>
  );
}

export default App;
