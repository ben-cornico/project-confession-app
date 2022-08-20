import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

function Card({data}) {
  return (
    <div className='confession-card'>
        <div className="confession-card-head">
            <Link className="confession-card-category" to={`/confessions/${data.category}`}>
                {data.category}
            </Link>
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