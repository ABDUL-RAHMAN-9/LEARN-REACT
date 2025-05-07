import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import { FaTheaterMasks } from "react-icons/fa"

export default function App()
{
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
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  )
}


