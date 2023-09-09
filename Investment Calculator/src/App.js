import { useState } from 'react';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Table from './components/Result/Table';
function App() {
  const [userInput, setUserData] = useState(null);
 
  const calculateHandler = (userInput) => {
    setUserData(userInput);
  }
  const yearlyData = []; // per-year results
  if (userInput) {
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          // feel free to change the shape of the data pushed to the array!
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
      console.log(yearlyData);
    // setUserData(yearlyData);
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header />
      <Form submit={calculateHandler} />
      {!userInput && <p className='alert'>No data added</p>}
      {userInput && <Table data={yearlyData} intialInvestment={userInput['current-savings']}/>}
      
    </div>
  );
}

export default App;
