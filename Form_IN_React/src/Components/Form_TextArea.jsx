import React, { useState } from 'react'

const Form_TextArea = () =>
{
  const [text, setText] = useState('Hello Guys');
  const [error, setError] = useState('');

  const handleChange = (e) =>
  {
    setText(e.target.value);
    if (e.target.value.trim() !== '')  
    {
      setError(''); //Clear error when user starts typing
    }
  }
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    if (text.trim() === '')
    {
      setError('Text area cannot be empty.');
      return;
    }
    alert(`Your Text${text}`);
    setText('');
    setError('');
  }

  return (
    <div>
      <h2>Form TextArea - </h2>
      <form onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <textarea value={text} onChange={handleChange} />
        <br />
        <button type='submit' >submit</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  )
}

export default Form_TextArea
