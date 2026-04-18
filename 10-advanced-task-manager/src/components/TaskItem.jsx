import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) =>
{
    return (
        <div className={`task-card priority-${task.priority} ${task.completed ? 'completed-state' : ''}`}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                />
                <span style={{
                    fontWeight: '600',
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'var(--text-muted)' : 'var(--text-main)'
                }}>
                    {task.text}
                </span>
                <span className="badge">{task.priority}</span>
            </div>

            <button
                onClick={() => onDelete(task.id)}
                style={{ background: 'transparent', border: 'none', color: '#ef4444', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.2rem' }}
            >
                ×
            </button>
        </div>
    );
};

export default TaskItem;