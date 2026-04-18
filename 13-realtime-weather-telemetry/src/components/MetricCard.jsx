import React from 'react';

const MetricCard = ({ label, value, unit, color = "#fff" }) => (
    <div style={{ padding: '30px', background: '#000', border: '1px solid #1a1a1a', borderRadius: '20px' }}>
        <p className="mono" style={{ color: 'var(--text-dim)', marginBottom: '15px' }}>{label}</p>
        <p style={{ fontSize: '2.5rem', fontWeight: '900', margin: 0, color: color }}>
            {value}<span style={{ fontSize: '14px', fontWeight: '400', color: '#333', marginLeft: '5px' }}>{unit}</span>
        </p>
    </div>
);

export default MetricCard;