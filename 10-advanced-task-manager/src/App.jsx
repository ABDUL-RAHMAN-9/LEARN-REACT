import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () =>
{
  const [tasks, setTasks] = useState(() =>
  {
    const saved = localStorage.getItem('adv-tasks');
    return saved ? JSON.parse(saved) : [];
  });

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() =>
  {
    localStorage.setItem('adv-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) =>
  {
    setTasks([{ id: Date.now(), completed: false, ...task }, ...tasks]);
  };

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const toggleComplete = (id) =>
  {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    // This wrapper handles the background colors of the whole page
    <div className={isDarkMode ? 'dark' : ''}>

      {/* This is the Industrial Box Container */}
      <div className="dashboard-container">

        <button className="toggle-theme" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        <header>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '900', letterSpacing: '-0.05em', margin: 0 }}>
            Manager<span style={{ color: 'var(--accent)' }}>.Adv</span>
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '10px' }}>
            Advanced Task Intelligence Dashboard
          </p>
        </header>

        <div className="stats-grid">
          <div className="stat-card">
            <h4>Total Scope</h4>
            <p>{tasks.length}</p>
          </div>
          <div className="stat-card">
            <h4>Completed</h4>
            <p style={{ color: '#10b981' }}>{completedCount}</p>
          </div>
          <div className="stat-card">
            <h4>Efficiency</h4>
            <p>{tasks.length > 0 ? Math.round((completedCount / tasks.length) * 100) : 0}%</p>
          </div>
        </div>

        <TaskForm onAdd={addTask} />
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />

        <footer style={{ marginTop: '3rem', textAlign: 'center', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
          <p style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--text-muted)' }}>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;