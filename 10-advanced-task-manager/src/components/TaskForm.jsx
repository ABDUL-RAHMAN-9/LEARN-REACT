import React, { useState } from 'react';

const TaskForm = ({ onAdd }) =>
{
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('medium');

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd({ text, priority });
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', display: 'flex', gap: '10px' }}>
            <input
                style={{ flex: 3, padding: '15px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--text-main)' }}
                placeholder="Initialize new objective..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                style={{ flex: 1, padding: '10px', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--text-main)' }}
            >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button style={{ flex: 1, background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
                Deploy
            </button>
        </form>
    );
};

export default TaskForm;