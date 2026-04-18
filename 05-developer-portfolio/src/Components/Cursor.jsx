import React, { useEffect, useState } from 'react';

const Cursor = () =>
{
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(true);

    useEffect(() =>
    {
        const onMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
        const onMouseEnter = () => setVisible(true);
        const onMouseLeave = () => setVisible(false);

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseenter', onMouseEnter);
        document.addEventListener('mouseleave', onMouseLeave);

        return () =>
        {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseenter', onMouseEnter);
            document.removeEventListener('mouseleave', onMouseLeave);
        };
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: position.y,
                left: position.x,
                pointerEvents: 'none',
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: '#fff',       
                boxShadow: '0 0 8px 2px rgba(0,0,0,0.7)', 
                transform: 'translate(-50%, -50%)',
                transition: 'transform 0.15s ease-out, background-color 0.15s ease-out',
                zIndex: 9999,
                mixBlendMode: 'difference',
                opacity: visible ? 1 : 0,
            }}
        />
    );
};

export default Cursor;
