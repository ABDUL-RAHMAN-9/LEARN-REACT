import React, { useState } from 'react'

const SubmitForm = () =>
{
    const [name, setName] = useState('Abdul Rahman');

    const handleChange = (e) =>
    {
        setName(e.target.value);

    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (name.trim() === '')  
        {
            alert('Text area cannot be empty');
            return;
        }
        alert(`${name}`);
        setName('');
    }
    return (
        <div>
            <h2>From Submit -</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">
                    <input type="text" value={name} onChange={handleChange} />
                </label>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default SubmitForm
