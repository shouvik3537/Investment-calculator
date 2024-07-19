import {useState} from 'react';
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment:  10000,
    annualInvestment: 1200,
    expectedReturn: 12,
    duration: 10,
  });

  function handleInput (inputIdentifier, newValue){
    setUserInput(prevUserInput => {
      return{
         ...prevUserInput,
         [inputIdentifier]: newValue
     };
     });
  }
  return (
    <div>
      <Input userInput={userInput} onChange={handleInput}/>
      <Result/>
    </div>
      );
}

export default App
