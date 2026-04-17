import React from 'react';
import './App.css';
import BlogNav from './components/BlogNav';
import Posts from './components/Posts';

const App = () =>
{
  return (
    <div className="app-wrapper">
      <BlogNav />
      <Posts />
    </div>
  );
}

export default App;