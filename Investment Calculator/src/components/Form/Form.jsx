import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const initialUserInput = {
    'current-savings': 0,
    'yearly-contribution': 0,
    'expected-return': 0,
    duration: 0,
  };
  
  const[input,setinput]=useState({initialUserInput});

  function submitHandler(e) {
    e.preventDefault();
    console.log("submit");
    props.submit(input);
  }
  
  function resetHandler() {
    console.log("reset");
    setinput(initialUserInput);
    props.submit(null);
  }

  function inputHandler(input, val) {
    // console.log(inputIdentifier, val);
    setinput((prev)=>{
      return{
        ...prev,
        [input] : val,
      }
    })
    
  }
  // console.log(currentSaving,yearContribution);
  return (
    <form onSubmit={submitHandler} className="form">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            value = {input['current-savings']}
            onChange={(e) => inputHandler("current-savings", e.target.value)}
            type="number"
            id="current-savings"
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            value = {input['yearly-contribution']}
            onChange={(e) =>
              inputHandler("yearly-contribution", e.target.value)
            }
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            value = {input['expected-return']}
            onChange={(e) => inputHandler("expected-return", e.target.value)}
            type="number"
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            value = {input['duration']}
            onChange={(e) => inputHandler("duration", e.target.value)}
            type="number"
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button onClick={resetHandler} type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
