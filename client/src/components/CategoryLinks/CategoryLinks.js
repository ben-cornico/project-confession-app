import React from 'react';
import categories from './categories';
import { Link } from 'react-router-dom'
import './CategoryLinks.css'

function CategoryLinks({changeCat}) {
  return (
    <div className='cat-container'>
        <Link to="/" className='cat-link' onClick={changeCat}>All</Link>
        {categories.map((cat, index) => {
            return <Link to={`/${cat}`} className="cat-link" key={index}>{cat}</Link>
        })}
    </div>
  )
}

export default CategoryLinks