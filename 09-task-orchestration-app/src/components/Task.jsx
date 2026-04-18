import React from 'react';

const Task = ({ task, onDelete, onToggle }) =>
{
  return (
    <div
      className={`task ${task.reminder ? 'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Inline SVG Bell Icon */}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={task.reminder ? "#6366f1" : "#3f3f46"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>
          {task.text}
        </div>

        {/* Inline SVG Delete Icon */}
        <svg
          onClick={() => onDelete(task.id)}
          style={{ cursor: 'pointer', opacity: 0.4 }}
          className="hover-danger"
          width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
          onMouseEnter={(e) => e.currentTarget.style.opacity = 1}
          onMouseLeave={(e) => e.currentTarget.style.opacity = 0.4}
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="15" y1="9" x2="9" y2="15"></line>
          <line x1="9" y1="9" x2="15" y2="15"></line>
        </svg>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;