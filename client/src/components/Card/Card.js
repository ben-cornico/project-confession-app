import React from 'react';
import './Card.css'

function Card({data}) {
    console.log(data)
  return (
    <div className='confession-card'>
        <div className="confession-card-head">
            <div className="confession-card-category">
                {data.category}
            </div>
            <div className="confession-card-time">
                {data.date}
            </div>
        </div>

        <div className="confession-card-body">
            {data.body}
        </div>

        <div className="views-counter">
            {data.views}
        </div>
    </div>
  )
}

export default Card