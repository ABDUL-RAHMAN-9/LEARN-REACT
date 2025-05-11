import React, { useState } from 'react'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () =>
{
  const [tasks, setTasks] = useState([]);

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
      <div className='min-h-screen bg-gray-900 p-20 flex justify-center items-center'>
        <div className="min-h-screen bg-gray-100 rounded-2xl p-6">
          <div className="max-w-xl mx-auto">
            <div className="text-3xl font-bold mb-4 text-center">📝 Task Manager
              <TaskForm onAdd={addTask} />
              <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
