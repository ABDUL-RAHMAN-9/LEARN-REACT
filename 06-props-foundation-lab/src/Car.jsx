import React from 'react';
import PropTypes from 'prop-types';

const Car = ({ color, brand, carInfo, date, month }) =>
{
    return (
        <div className="spec-container">
            <div className="spec-header">
                <span>Asset_Configuration_Node</span>
                <span>Active_Props</span>
            </div>

            <div className="spec-body">
                <div className="spec-row">
                    <span className="label">Identity</span>
                    <span className="value text-accent">{brand}</span>
                </div>

                <div className="spec-row">
                    <span className="label">Sub_Model</span>
                    <span className="value">{carInfo.modal}</span>
                </div>

                <div className="spec-row">
                    <span className="label">Finish_Code</span>
                    <span className="tag">{color}</span>
                </div>

                <div className="spec-row">
                    <span className="label">Market_Value</span>
                    <span className="value">{carInfo.price}</span>
                </div>

                <div className="spec-row">
                    <span className="label">Injection_Date</span>
                    <span className="value">{date} {month.toUpperCase()}</span>
                </div>
            </div>
        </div>
    );
};

Car.propTypes = {
    color: PropTypes.string,
    brand: PropTypes.string,
    carInfo: PropTypes.shape({
        modal: PropTypes.string,
        price: PropTypes.string
    }),
    date: PropTypes.number,
    month: PropTypes.string
};

export default Car;