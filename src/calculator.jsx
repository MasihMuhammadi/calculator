import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const handleClickPrecent = (e) => {
    setResult(result.concat() / 100);
  };


  const clear = () => {
    setResult('');
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="container">
      <div className="calculator">
        <input type="text" value={result} />

        <div className="keypad">
          <button className="btn btn-outline-primary" onClick={clear}>Cl</button>
          <button className="btn btn-outline-primary" onClick={backspace}>C</button>
          <button className="btn btn-outline-primary" onClick={handleClickPrecent}>%</button>
          <button className="btn btn-primary" name="/" onClick={handleClick}>/</button>
          <button className="btn" name="7" onClick={handleClick}>7</button>
          <button className="btn" name="8" onClick={handleClick}>8</button>
          <button className="btn" name="9" onClick={handleClick}>9</button>
          <button className="btn btn-primary" name="*" onClick={handleClick}>*</button>
          <button className="btn" name="4" onClick={handleClick}>4</button>
          <button className="btn" name="5" onClick={handleClick}>5</button>
          <button className="btn" name="6" onClick={handleClick}>6</button>
          <button className="btn btn-primary" name="-" onClick={handleClick}>-</button>
          <button className="btn" name="1" onClick={handleClick}>1</button>
          <button className="btn" name="2" onClick={handleClick}>2</button>
          <button className="btn" name="3" onClick={handleClick}>3</button>
          <button className="btn btn-primary" name="+" onClick={handleClick}>+</button>
          <button className="btn" name="0" onClick={handleClick}>0</button>
          <button className="btn" name="." onClick={handleClick}>.</button>
          <button className="btn btn equal" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
