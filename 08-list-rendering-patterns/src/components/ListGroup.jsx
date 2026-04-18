import React, { useState } from 'react';

const ListGroup = ({ heading }) =>
{
    // Pattern Data Registry
    const patterns = [
        { id: 'MEM', name: 'Memoization', complexity: 'O(1)' },
        { id: 'REC', name: 'Reconciliation', complexity: 'O(n)' },
        { id: 'VIR', name: 'Virtualization', complexity: 'O(k)' },
        { id: 'HOC', name: 'Higher Order Components', complexity: 'N/A' },
        { id: 'LZY', name: 'Lazy Loading', complexity: 'Async' },
        { id: 'HYD', name: 'Hydration', complexity: 'Static' }
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);
    const [search, setSearch] = useState('');

    // Filter Logic: Matches search query against pattern names
    const filteredItems = patterns.filter(item =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="box">
            <header>
                <h1>{heading}</h1>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Logic Flow & List Mapping Laboratory</p>
            </header>

            {/* Search Module */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Filter patterns (e.g. Memo...)"
                    value={search}
                    onChange={(e) =>
                    {
                        setSearch(e.target.value);
                        setSelectedIndex(null); // Reset selection on search
                    }}
                />
            </div>

            {/* Conditional Rendering: Empty State */}
            {filteredItems.length === 0 && (
                <p style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    No patterns matching current criteria.
                </p>
            )}

            {/* List Mapping Module */}
            <div className="list-container">
                {filteredItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`list-item ${selectedIndex === index ? 'active' : ''}`}
                        onClick={() => setSelectedIndex(index)}
                    >
                        <span className="item-text">{item.name}</span>
                        <span className="item-tag">{item.complexity}</span>
                    </div>
                ))}
            </div>

            {/* Status & Control Module */}
            <div className="status-box">
                {selectedIndex !== null ? (
                    <span>Selected Pattern: <strong>{filteredItems[selectedIndex]?.name}</strong></span>
                ) : (
                    <span>Select a pattern to view metadata</span>
                )}
            </div>

            <button className="reset-btn" onClick={() => setSelectedIndex(null)}>
                Clear Selection
            </button>
        </div>
    );
};

export default ListGroup;