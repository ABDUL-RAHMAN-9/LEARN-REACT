import React from 'react'

const Button = ({ handleClick, label }) =>
{
    return (
        <div className='btn'>
            <button onClick={handleClick}>{label} </button>
        </div>
    )
}

export default Button
