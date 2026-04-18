import React from 'react';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) =>
{
    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: '900', letterSpacing: '-0.05em' }}>
                {title}<span style={{ color: '#6366f1' }}>.ENGINE</span>
            </h1>
            <Button
                color={showAdd ? '#f43f5e' : '#6366f1'}
                text={showAdd ? 'Abort' : 'New Task'}
                onClick={onAdd}
            />
        </header>
    );
};

export default Header;