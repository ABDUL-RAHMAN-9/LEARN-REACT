import React from 'react'
// import Api from '../API/Api'

const Card = () =>
{
    return (

        <div className='container'>
            <div className="container_info">
                <div className="img_container">bhono</div>
                <div className="card_content_container">
                    <div className="card_tag"></div>
                    <div className="date_container"></div>
                    <div className="card_heading"></div>
                    <div className="card_description"><h1></h1></div>
                    {/* ADD btn here  using btn compoenent */}
                </div>
                <div className="author">
                    {/* give img using the assests */}
                    <div className="avatar"></div>
                    <div className="author_name"></div>
                </div>
                <div className="actions">
                    <div className="like_btn"></div>
                    <div className="comment_btn"></div>
                </div>

            </div>
        </div>
    )
}

export default Card
