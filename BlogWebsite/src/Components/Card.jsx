import React from 'react'

const Card = ({ image, category, date, title, summary, author, likes }) =>
{
    return (

        <div className='max-w-xl rounded-2xl overflow-hidden shadow-md bg-white p-4 space-y-3'>
            <img src={image} alt="cover" className='w-full h-48 object-cover rounded-2xl' />
            

        </div>
    )
}

export default Card
