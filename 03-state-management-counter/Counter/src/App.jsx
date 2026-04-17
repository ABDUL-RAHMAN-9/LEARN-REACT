import React, { useState } from 'react';
import Button from './Button';

const App = () =>
{
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => setCounter(counter + 1);
    const decreaseCounter = () => setCounter(counter - 1);
    const setToZero = () => setCounter(0);

    return (
        <div className="counter-wrapper">
            <div className="counter-card">
                <p className="status-label">Engine.State_Controller</p>

                <h1 className={counter >= 0 ? "value-positive" : "value-negative"}>
                    {counter}
                </h1>

                <div className="button-group">
                    <Button handleClick={decreaseCounter} label="-" className="btn-dec" />
                    <Button handleClick={setToZero} label="Reset" className="btn-reset" />
                    <Button handleClick={increaseCounter} label="+" className="btn-inc" />
                </div>

                <div className="telemetry-bar">
                    <span>Stability: Nominal</span>
                    <span>v2.0.4</span>
                </div>
            </div>
        </div>
    );
}

export default App;