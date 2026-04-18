import React from 'react';

const SubmitForm = () =>
{
    const [name, setName] = React.useState('Abdul Rahman');
    return (
        <div className="form-card">
            <h2>01. IDENTITY_GATE</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button style={{ marginTop: '1.5rem' }}>Verify Identity</button>
            </form>
        </div>
    );
};

export default SubmitForm;