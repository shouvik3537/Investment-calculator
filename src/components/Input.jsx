import { useState } from 'react';

export default function Input(){

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
    return(
      <section id="user-input">
           <div className="input-group">
            <p>
             <label>Initial Investment</label>
             <input type="number" 
             required
             value = {userInput.initialInvestment}
             onChange={(event) =>handleInput('initialInvestment',event.target.value)}
             />
             </p>
             <p>
              <label>Annual Investment</label>
              <input type="number" 
               required
               value = {userInput.annualInvestment}
               onChange={(event) =>handleInput('annualInvestment',event.target.value)}
             />
              </p>
          </div>
          <div class="input-group">
            <p>
              <label>Expected Result</label>
              <input type="number" 
               required
               value={userInput.expectedReturn}
               onChange={(event) =>handleInput('expectedReturn',event.target.value)}
             />
            </p>
            <p>
              <label>Duration</label>
              <input type="number" 
               required
               value={userInput.duration}
               onChange={(event) =>handleInput('Duration',event.target.value)}
             />
            </p>
          </div>
      </section>
    );
}
