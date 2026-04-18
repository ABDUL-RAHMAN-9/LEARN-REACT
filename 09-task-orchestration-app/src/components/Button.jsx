import React from 'react';

const Button = ({ color, text, onClick }) =>
{
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color,
                border: 'none',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '12px',
                fontWeight: '700',
                fontSize: '11px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                cursor: 'pointer'
            }}
        >
            {text}
        </button>
    );
};

export default Button;