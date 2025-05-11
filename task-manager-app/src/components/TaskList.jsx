import React from 'react'
import TaskItem from './TaskItem'
const TaskList = ({ tasks, onDelete, onToggle }) =>
{
    if (tasks.length === 0)
    {
        return <p className='text-center text-gray-500'>NO Tasks yet!</p>
    }
    return (
        <>
            <ul className='space-y-2'>
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                ))}
            </ul>
        </>
    )
}

export default TaskList
