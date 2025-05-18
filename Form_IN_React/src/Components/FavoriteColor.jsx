import React, { useState } from 'react'

const FavoriteColor = () =>
{
    const [color, setColor] = useState('blue');

    const style = {
        backgroundColor: color,  // backgroundColor
        color: 'white',         // text color
    }
    return (
        <div>
            <h2>Favorite Color - </h2>
            <h3 style={style}>{color}</h3>
            <button onClick={() => setColor('orange')}> Orange</button>
            <button onClick={() => setColor("green")}>Green</button>
            <button onClick={() => setColor("purple")}>Purple</button>
        </div>
    )
}

export default FavoriteColor
