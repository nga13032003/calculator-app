import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        setInput(prevInput => prevInput + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleDelete = () => {
        setInput(prevInput => prevInput.slice(0, -1));
    };

    const handleCalculate = () => {
        try {
            setResult(evaluate(input));
        } catch (error) {
            setResult('Error');
        }
    };

    const handleSpecialOperation = (operation) => {
        let currentInput = input;
        if (operation === '1/x') {
            currentInput = `1/(${currentInput})`;
        } else if (operation === '√') {
            currentInput = `sqrt(${currentInput})`;
        } else if (operation === 'x²') {
            currentInput = `(${currentInput})^2`;
        } else if (['sin', 'cos', 'tan', 'cot'].includes(operation)) {
            currentInput = `${operation}(${currentInput})`;
        }
        setInput(currentInput);
    };

    return (
        <div className="calculator">
            <div className="display">
                <input
                    type="text"
                    value={input}
                    readOnly
                    placeholder="0"
                />
                <div className="result">
                    <h2>Result: {result}</h2>
                </div>
            </div>
            <div className="buttons">
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                <button onClick={() => handleButtonClick('3')}>3</button>
                <button onClick={() => handleButtonClick('4')}>4</button>
                <button onClick={() => handleButtonClick('5')}>5</button>
                <button onClick={() => handleButtonClick('6')}>6</button>
                <button onClick={() => handleButtonClick('7')}>7</button>
                <button onClick={() => handleButtonClick('8')}>8</button>
                <button onClick={() => handleButtonClick('9')}>9</button>
                <button onClick={() => handleButtonClick('0')}>0</button>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                <button onClick={() => handleButtonClick('*')}>*</button>
                <button onClick={() => handleButtonClick('/')}>/</button>
                <button onClick={() => handleButtonClick('.')}>.</button>
                <button onClick={() => handleButtonClick('%')}>%</button>
                <button onClick={() => handleSpecialOperation('1/x')}>1/x</button>
                <button onClick={() => handleSpecialOperation('√')}>√</button>
                <button onClick={() => handleSpecialOperation('x²')}>x²</button>
                <button onClick={() => handleSpecialOperation('sin')}>sin</button>
                <button onClick={() => handleSpecialOperation('cos')}>cos</button>
                <button onClick={() => handleSpecialOperation('tan')}>tan</button>
                <button onClick={() => handleSpecialOperation('cot')}>cot</button>
                <button onClick={handleClear} className="clear-button">C</button>
                <button onClick={handleDelete} className="delete-button">DEL</button>
                <button onClick={handleCalculate} className="equals-button">=</button>
            </div>
        </div>
    );
};

export default Calculator;
