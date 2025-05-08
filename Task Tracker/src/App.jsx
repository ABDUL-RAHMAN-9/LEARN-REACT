import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { FaTheaterMasks } from "react-icons/fa"

export default function App()
{
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Office Meeting",
      day: 'May 6th at 10:51pm',
      reminder: true,

    },
    {
      id: 2,
      text: "College Meeting",
      day: 'May 7th at 10:51pm',
      reminder: true,

    },
    {
      id: 3,
      text: "Food Shopping",
      day: 'May 8th at 10:51pm',
      reminder: false,

    },
    {
      id: 4,
      text: "Cooking Food",
      day: 'May 9th at 10:51pm',
      reminder: true,

    }
  ])
  // Add Task

  const addTask = (task) =>
  {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  }

  // Delete task
  const deleteTask = (id) =>
  {
    setTasks(tasks.filter((task) => task.id != id))
  }
  // Toggle reminder
  const toggleReminder = (id) =>
  {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header
        onAdd={() =>
          setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  )
}


