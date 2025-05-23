import React, { useState } from 'react'

const TaskForm = ({ onAdd }) =>
{
    const [text, setText] = useState("");
    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (!text.trim())
        {
            alert('Please enter a task first!');
            return;
        }
        onAdd({ text, completed: false });
        setText("");
    }
    return (
        <>
            <form
                onSubmit={handleSubmit}
                className='flex gap-2 mb-10 mt-12 '
            >
                <input
                    type='text'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Add new task...'
                    maxLength={30}
                    className='flex-1 px-4 py-2 border rounded'
                />
                <button
                    type='submit'
                    className='bg-blue-500 text-white px-4 py-2 hover:bg-blue-600'
                >
                    Add
                </button>
            </form>
        </>
    )
}

export default TaskForm
