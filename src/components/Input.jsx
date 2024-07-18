import useState from 'react';

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

export default function Input(){
    return(
      <section id="user-input">
           <div className="input-group">
            <p>
             <label>Initial Investment</label>
             <input type="number" required />
             </p>
             <p>
              <label>Annual Investment</label>
              <input type="number" required />
              </p>
          </div>
          <div class="input-group">
            <p>
              <label>Expected Result</label>
              <input type="number" required />
            </p>
            <p>
              <label>Duration</label>
              <input type="number" required />
            </p>
          </div>
      </section>
    );
}