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
         [inputIdentifier]: +newValue //Initial the input of the newvalue is string + makes its numerical
     };
     });
  }
  
  const inputIsValid = userInput.duration>=1; 
  return (
    <div>
      <Input userInput={userInput} onChange={handleInput}/>
      {!inputIsValid && <p className='center'>Please enter a duration greater than Zero</p>}
      {inputIsValid && <Result input={userInput}/>}
    </div>
      );
}

export default App
