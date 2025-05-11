import React from 'react'

const TaskItem = ({ task, onDelete, onToggle }) =>
{
    return (
        <>
            <li
                className={`flex items-center justify-between p-4 py-2 bg-white rounded shadow 
                ${task.completed ? "line-through text-gray-400" : ""}`}
            >
                <span
                    onClick={() => onToggle(task.id)}
                    className='coursor-pointer flex-1'
                >
                    {task.text}
                </span>
                <button
                    onClick={() => onDelete(task.id)}
                    className='ml-4 text-red-600 hover:text-red-700'
                >
                    ✕
                </button>

            </li>
        </>
    )
}

export default TaskItem
