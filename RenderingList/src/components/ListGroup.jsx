import React, { useState } from 'react'
const ListGroup = ({ heading }) =>
{
    const items = [
        'NewYork',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris'
    ]

    const [selectedIndex, setSelectIndex] = useState(null);
    const [serach, setSerach] = useState('');
    return (
        <div>
            <h1>{heading}</h1>
            {/* Check if items is present or not if not dipslay this */}
            {items.length === 0 && <p>No item Found</p>}
            {items.map((item, index) =>
                <h2
                    key={index}
                    //  Highlight the selected item
                    onClick={() => setSelectIndex(index)}
                    style={{ color: selectedIndex === index ? 'red' : 'orange', cursor: 'pointer' }}

                >
                    {item}
                </h2>
            )}

            {/* Show a message below the list */}
            {selectedIndex !== null && (<p>You selected : <strong>{items[selectedIndex]}</strong></p>)}

            {/* Add a "Reset Selection" button */}
            <button onClick={() => setSelectIndex(null)}>Reset</button>

            {/* Filter list with a search box */}
            <input
                type='text'
                placeholder='Serach city'
                value={serach}
                onChange={(e) => setSerach(e.target.value)}
            />
            {items.filter(item => item.toLowerCase().includes(serach.toLowerCase()))
                .map((item, index) =>
                (
                    <h2 key={index}>{item}</h2>
                ))}
        </div>
    )
}

export default ListGroup
