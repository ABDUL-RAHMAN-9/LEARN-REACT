import React from 'react';

const Notification = ({ msg, type, onClear }) =>
{
  if (!msg) return null;

  const colors = {
    danger: '#ff4b4b', // Red
    success: '#00ff88', // Green
    warning: '#ffab2e', // Orange
    info: '#ff2ebc'     // Pink
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '40px',
      right: '40px',
      background: '#000',
      border: `1px solid ${colors[type]}`,
      padding: '20px 30px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      zIndex: 1000,
      animation: 'fadeIn 0.3s ease'
    }}>
      <div style={{ height: '10px', width: '10px', borderRadius: '50%', background: colors[type] }}></div>
      <span style={{
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '12px',
        textTransform: 'uppercase',
        color: colors[type]
      }}>
        {msg}
      </span>
      <button
        onClick={onClear}
        style={{ background: 'transparent', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '18px' }}
      >
        ×
      </button>
    </div>
  );
};

export default Notification;