import { useState } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'

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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}


