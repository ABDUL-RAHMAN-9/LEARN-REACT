import React from 'react'
import "./App.css";
import Navbar from './components/BlogNav'
import Posts from './components/Posts'

const App = () =>
{
  return (
    <div>
      <div
        className="main-container"
        style={{ backgroundColor: "red" }}
      >
        <Navbar />
        <Posts />
      </div>
    </div>
  )
}

export default App
