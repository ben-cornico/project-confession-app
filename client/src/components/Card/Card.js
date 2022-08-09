import React from 'react';


function Card({data}) {
  return (
    <div className='confession-card'>
        <div className="confession-head">
            <div className="confession-category">
                {data.category}
            </div>
            <div className="confession-time">
                {data.time}
            </div>
        </div>

        <div className="confession-body">
            {data.body}
        </div>

        <div className="views-counter">
            {data.views}
        </div>
    </div>
  )
}

export default Card