import { useState } from "react";
import { PropTypes } from "prop-types"


export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const handleCountDown = () => setCounter(counter - 1);
    const handleCountUp = () => setCounter(counter + 1);
    const handleReset = () => setCounter(value);

    return (
        <>
            <div className="counter">
                <h1>CounterApp</h1>
                <h2>{counter}</h2>
                <div className="actions">
                    <button onClick={handleCountDown} > -1 </button>&nbsp;<button onClick={handleCountUp} > +1 </button>&nbsp;<button onClick={handleReset} > Reset </button>
                </div>
            </div>
        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}

//Documentación de eventos en react
/*
https://es.reactjs.org/docs/events.html

* useState son Hooks

*/