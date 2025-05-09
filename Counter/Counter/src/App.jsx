import React, { useState } from 'react'
import Button from './Button';

const App = () =>
{
    const [counter, setCounter] = useState(0);

    const increaseCounter = () =>
    {
        setCounter(counter + 1);
    }
    const decreaseCounter = () =>
    {
        setCounter(counter - 1);
    }
    const setToZero = () =>
    {
        setCounter(0);
    }
    return (
        <>
            <h1>{counter}</h1>
            <div className='container'>
                <Button handleClick={increaseCounter} label={'+'} />
                <Button handleClick={decreaseCounter} label={'-'} />
                <Button handleClick={setToZero} label={'Set to Zero'} />
            </div>
        </>
    )
}

export default App
