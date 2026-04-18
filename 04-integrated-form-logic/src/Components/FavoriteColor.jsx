import React, { useState } from 'react';

const FavoriteColor = () =>
{
    const [color, setColor] = useState('#6366f1');
    const colors = [
        { name: 'Indigo', hex: '#6366f1' },
        { name: 'Rose', hex: '#f43f5e' },
        { name: 'Emerald', hex: '#10b981' },
        { name: 'Amber', hex: '#f59e0b' }
    ];

    return (
        <div className="form-card">
            <h2>02. Environment_Theme</h2>
            <p style={{ color: color, fontWeight: '700', marginBottom: '1rem' }}>Active Spectrum: {color}</p>
            <div style={{ display: 'flex', gap: '10px' }}>
                {colors.map((c) => (
                    <button
                        key={c.hex}
                        onClick={() => setColor(c.hex)}
                        style={{ background: c.hex, color: 'white', flex: 1, fontSize: '10px' }}
                    >
                        {c.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FavoriteColor;