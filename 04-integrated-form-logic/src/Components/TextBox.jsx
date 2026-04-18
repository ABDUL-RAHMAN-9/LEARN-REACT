import React, { useState } from 'react'

const TextBox = () =>
{
  const [inputText, setInputText] = useState('');

  const handleChange = (e) =>
  {
    e.preventDefault();
    alert(inputText);
    setInputText('');
  }

  return (
    <div>
      <h2>From TextBox -</h2>
      <form onSubmit={handleChange}>
        <label htmlFor="">
          <input type="text" value={inputText} placeholder='Enter text here...' onChange={(e) => setInputText(e.target.value)} />
        </label>
      </form>
    </div>
  )
}

export default TextBox
