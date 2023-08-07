import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [firstNumber, setFirstNumber] = useState<string>("");
  const [secondNumber, setSecondNumber] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [result, setResult] = useState<number>();

  const handleNumberClick = (number: string) => {
    if (operator === "") {
      setFirstNumber(firstNumber + number);
    } else {
      setSecondNumber(secondNumber + number);
    }
  };

  const handleOperatorClick = (operator: string) => {
    setOperator(operator);
    setFirstNumber(firstNumber.slice(0, -1));
    setSecondNumber("");
  };

  const handleEqualClick = () => {
    const calculation = calculate(firstNumber, secondNumber, operator);
    setResult(calculation);
  };

  const calculate = (firstNumber: string, secondNumber: string, operator: string) => {
    const firstNumberNumber = Number(firstNumber);
    const secondNumberNumber = Number(secondNumber);

    switch (operator) {
      case "+":
        return firstNumberNumber + secondNumberNumber;
      case "-":
        return firstNumberNumber - secondNumberNumber;
      case "*":
        return firstNumberNumber * secondNumberNumber;
      case "/":
        return firstNumberNumber / secondNumberNumber;
      default:
        return 0;
    }
  };

  return (
    <div
      className="calculator"
      style={{
        margin: 0,
        padding: 0,
        position: "absolute",
        top: 50%,
        left: 50%,
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1>Calculator</h1>
      <div>
        <input
          type="text"
          value={firstNumber}
          onChange={(event) => setFirstNumber(event.target.value)}
        />
        <select value={operator} onChange={(event) => setOperator(event.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          value={secondNumber}
          onChange={(event) => setSecondNumber(event.target.value)}
        />
      </div>
      <button onClick={handleEqualClick}>=</button>
      <div>
        <h2>{result}</h2>
      </div>
    </div>
  );
};

export default Calculator;
