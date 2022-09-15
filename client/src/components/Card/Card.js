import React from 'react';
import './Card.css'
import moment from 'moment'

function Card({data }, ref) {

  return (
    <>
    <div className='confession-card' ref={ref} >
        <div className="confession-card-head" >
            <div className={`confession-card-category ${data.category}-link cat-link`}>
                {data.category}
            </div>
            <div className="confession-card-time">
                {moment(data.date).fromNow()}
            </div>
        </div>

        <div className="confession-card-body"  onClick={() => navigate(`/confession/${data._id}`)}>
            {data.body}
        </div>

        <div className="views-counter">
            {data.views}
        </div>
    </div>
    
    </>
  )
}

const forwaredRef = React.forwardRef(Card)

export default forwaredRef