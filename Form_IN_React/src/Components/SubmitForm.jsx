import React, { useState } from 'react'

const SubmitForm = () =>
{
    const [name, setName] = useState('Abdul Rahman');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        alert(`Hello ${name}`);
        setName('');
    }

    return (
        <div>
            <h2>From Submit -</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default SubmitForm
