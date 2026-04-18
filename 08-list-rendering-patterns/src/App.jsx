import React from 'react';
import ListGroup from './components/ListGroup';
import './index.css';

const App = () =>
{
  return (
    <div className="app-wrapper">
      {/* Passing professional technical heading via Props */}
      <ListGroup heading="Rendering_Pattern_Registry" />

      <footer style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
      </footer>
    </div>
  );
}

export default App;