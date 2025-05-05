import React from 'react'

function Car(props)
{
    return (
        <div>
            <h2>Car color : {props.color}</h2>
            <h2>Car Brand: {props.brand}</h2>
            <h2>Car Modal : {props.carInfo.modal}</h2>
            <h2>Car Price : {props.carInfo.price}</h2>
        </div>
    )
}
export default Car;