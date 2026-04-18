import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

export default function App()
{
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Network Latency Audit', day: 'April 20 @ 14:00', reminder: true },
    { id: 2, text: 'PostgreSQL Buffer Tuning', day: 'April 21 @ 09:30', reminder: true },
    { id: 3, text: 'Legacy Code Purge', day: 'April 22 @ 16:00', reminder: false },
  ]);

  const addTask = (task) =>
  {
    const id = Math.floor(Math.random() * 10000) + 1;
    setTasks([...tasks, { id, ...task }]);
    setShowAddTask(false);
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const toggleReminder = (id) =>
  {
    setTasks(tasks.map((t) => t.id === id ? { ...t, reminder: !t.reminder } : t));
  };

  return (
    <div className="container">
      <Header
        title="TASK_TRACKER"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <p style={{ textAlign: 'center', color: '#71717a', fontSize: '13px', marginTop: '40px' }}>
          Zero objectives currently in registry.
        </p>
      )}

      <footer style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #27272a', textAlign: 'center', color: '#3f3f46', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
      </footer>
    </div>
  );
}