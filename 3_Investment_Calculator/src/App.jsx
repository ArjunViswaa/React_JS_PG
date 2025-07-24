import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 500,
    expectedReturn: 5,
    duration: 10
  });

  const isInputValid = userInput.duration > 0;

  const handleChange = (inputIdentifier, newValue) => {
    setUserInput((prevUserInput) => (
      {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    ));
  };

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleChange} />
      {!isInputValid && <p className="center">Please enter a duration greater than ZERO (0)</p>}
      {isInputValid && <Results userInput={userInput} />}
    </>
  )
}

export default App
