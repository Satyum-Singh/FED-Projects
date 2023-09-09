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
    let currentSavings = +userInput['current-savings']; 
    const yearlyContribution = +userInput['yearly-contribution']; 
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    
      for (let i = 0; i < duration; i++) {
        const yearlyInterest = currentSavings * expectedReturn;
        currentSavings += yearlyInterest + yearlyContribution;
        yearlyData.push({
          year: i + 1,
          yearlyInterest: yearlyInterest,
          savingsEndOfYear: currentSavings,
          yearlyContribution: yearlyContribution,
        });
      }
      console.log(yearlyData);
 
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
