import React from 'react';

const Button = ({ handleClick, label, className }) =>
{
    return (
        <button onClick={handleClick} className={className}>
            {label}
        </button>
    );
}

export default Button;