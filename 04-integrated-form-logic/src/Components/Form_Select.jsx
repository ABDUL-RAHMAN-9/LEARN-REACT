import React, { useState } from 'react';

const Form_Select = () =>
{
    const [myCar, setMyCar] = useState('Select Vehicle');
    return (
        <div className="form-card">
            <h2>03. Asset_Deployment</h2>
            <select value={myCar} onChange={(e) => setMyCar(e.target.value)}>
                <option value="" disabled>Select a vehicle...</option>
                <option value="Mercedes">Mercedes-Benz G-Class</option>
                <option value="BMW">BMW M4 Competition</option>
                <option value="Audi">Audi RS7</option>
            </select>
            <p style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>Selected Unit: {myCar}</p>
        </div>
    );
};

export default Form_Select;