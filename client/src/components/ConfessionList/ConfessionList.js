import React, { Component } from 'react'
import Card from '../Card/Card';
import './ConfessionList.css'


function ConfessionList({confessions}) { 

    return (
        <div className='confession-list'>
            {
                confessions.map((confession, index) => {
                    return (
                        <Card data={confession} key={confession._id}/>
                    )
                })
            }

        </div>
    )
}

export default ConfessionList