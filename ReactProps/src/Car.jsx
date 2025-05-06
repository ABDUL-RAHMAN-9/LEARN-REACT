import React from 'react'
import PropTypes from 'prop-types'

function Car(
    {
        color,
        brand,
        carInfo,
        date,
        month

    })
{
    return (
        <div>
            <h2>Car color : {color}</h2>
            <h2>Car Brand: {brand}</h2>
            <h2>Car Modal : {carInfo.modal}</h2>
            <h2>Car Price : {carInfo.price}</h2>
            {/* Default */}
            <h2>Car manufacturing Date: {date}</h2>
            <h2>Car manufacturing month: {month}</h2>
        </div>
    )
}

// Define PropTypes for type checking
Car.PropTypes = {
    color: PropTypes.string,
    brand: PropTypes.stirng,
    carInfo: PropTypes.shape({
        modal: PropTypes.string,
        price: PropTypes.string
    }),
    date: PropTypes.number,
    month: PropTypes.string

}

// Set default values for props
Car.defaultProps = {
    color: "Unknown",
    brand: "Unknown",
    carInfo: { modal: "Unknown", price: "N/A" },
    date: 0,
    month: "notSpecified"
}



export default Car;