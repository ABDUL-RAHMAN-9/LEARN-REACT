import React from 'react';
import SubmitForm from './Components/SubmitForm';
import Form_Select from './Components/Form_Select';
import FavoriteColor from './Components/FavoriteColor';
import Form_TextArea from './Components/Form_TextArea';

const App = () =>
{
  return (
    <div className="lab-container">
      <header>
        <h1>Form<span style={{ color: 'var(--accent)' }}>.Lab</span></h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>
          Integrated Logic & State Management Dashboard
        </p>
      </header>

      <div className="grid-layout">
        <SubmitForm />
        <FavoriteColor />
        <Form_Select />
        <Form_TextArea />
      </div>
    </div>
  );
};

export default App;