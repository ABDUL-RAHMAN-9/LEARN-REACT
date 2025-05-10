import React from 'react'

const AlertBox = ({ onClose }) =>
{
    return (
        <>
            <div className="alert-box">
                <span className='alert-message'>This is an alert</span>
                <button className='close-btn' onClick={onClose}>X</button>
            </div>
        </>
    )
}

export default AlertBox
