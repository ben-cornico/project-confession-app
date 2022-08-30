import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'
import moment from 'moment'

function Card({data, selectCat}) {
  return (
    <div className='confession-card'>
        <div className="confession-card-head">
            <Link className={`confession-card-category ${data.category}-link cat-link`} to={`/${data.category}`} onClick={() => selectCat(data.category)}>
                {data.category}
            </Link>
            <div className="confession-card-time">
                {moment(data.date).fromNow()}
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