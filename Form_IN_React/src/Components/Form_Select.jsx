import React, { useState } from 'react'

const Form_Select = () =>
{
    const [myCar, setMyCar] = useState('Select Car');
    const handleChange = (e) =>
    {
        setMyCar(e.target.value);
    }
    return (
        <div>
            <h2>Form Select - </h2>
            <form action="">
                <select name="" id="" value={myCar} onChange={handleChange}>
                    <option value="Mercedes">Mercedes</option>
                    <option value="BMW">BMW</option>
                    <option value="AUDI">AUDI</option>
                    <option value="G-WAGON">G-WAGON</option>
                </select>
            </form>
        </div>
    )
}

export default Form_Select
