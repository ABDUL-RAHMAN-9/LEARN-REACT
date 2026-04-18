import React, { useState } from 'react';

const SearchTerminal = ({ onSearch }) =>
{
    const [val, setVal] = useState("");
    return (
        <div className="search-hud">
            <input
                placeholder="SYNC_CITY_NAME + ENTER"
                onKeyDown={(e) => { if (e.key === 'Enter') { onSearch(val); setVal(""); } }}
                onChange={(e) => setVal(e.target.value)}
                value={val}
            />
        </div>
    );
};

export default SearchTerminal;