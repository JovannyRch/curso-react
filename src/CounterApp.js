import React, { useState } from 'react';
import PropTypes from 'prop-types';



const CounterApp = ({ value }) => {

    const handleAdd = (e) => {
        setCounter(counter + 1);
    };

    const handleSubstract = (e) => {
        setCounter(counter - 1);
    };

    const handleReset = (e) => {
        setCounter(0);
    }

    const [counter, setCounter] = useState(0);

    return <>
        <h1>Counter App</h1>
        <h2>{counter}</h2>
        <button onClick={handleAdd} >+1</button>
        <button onClick={handleReset} >Reset</button>
        <button onClick={handleSubstract} >-1</button>
    </>
};


CounterApp.propTypes = {
    value: PropTypes.number,
};

export default CounterApp;