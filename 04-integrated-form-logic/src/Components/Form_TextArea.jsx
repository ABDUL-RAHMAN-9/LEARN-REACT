import React from 'react';

const Form_TextArea = () =>
{
  const [text, setText] = React.useState('');
  return (
    <div className="form-card">
      <h2>04. ENCRYPTED_MESSAGE</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <textarea
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type secure message here..."
        />
        <button style={{ marginTop: '1.5rem', background: 'var(--accent)', color: 'white' }}>
          Send Transmission
        </button>
      </form>
    </div>
  );
};

export default Form_TextArea;