import React, { useState } from 'react';
import PropTypes from 'prop-types';


let { counter, setCounter } = useState(0);

const PrimeraApp = ({ saludo, subtitulo }) => {
    return <>
        <h1>{saludo}</h1>
        <h5>{subtitulo}</h5>
        <p>{counter}</p>
        <button onClick={() => { setCounter(counter++) }}>Incrementar </button>
    </>;
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired,
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy el subtitulo por defecto"
}

export default PrimeraApp;