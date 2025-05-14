import React, { useState } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () =>
{
  const [tasks, setTasks] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () =>
  {
    setIsDarkMode(!isDarkMode);
  }

  const addTask = (task) =>
  {
    setTasks([{ id: Date.now(), ...task }, ...tasks]);
  };

  const deleteTask = (id) =>
  {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) =>
  {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  return (
    <>
      <div className='min-h-screen bg-gray-100 p-20 flex justify-center items-center'>
        <div className={isDarkMode ? 'bg-gray-900 text-white rounded-2xl' : 'bg-white text-black  rounded-2xl border-2'}>
          <div className="min-h-screen rounded-2xl p-6 ">
            <div className="max-w-xl mx-auto">
              <button onClick={toggleDarkMode}
                className='bg-gray-500 text-white px-4 py-2 rounded mb-4'>
                Toggle Theme
              </button>
              <div className="text-3xl font-bold mb-4 text-center">📝 Task Manager
                <TaskForm onAdd={addTask} className={isDarkMode ? 'text-gray-900 ' : ' text-gray'} />
                <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
