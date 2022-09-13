import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'
import Card from '../components/Card/Card'
import useGetConfessionById from '../Confessions/useGetConfessionById';

function View() {
    const { id } = useParams();
    const {
        confession,
        error
    } = useGetConfessionById(id);
    console.log(confession)
  return (
    <>
        <div className='card-view'>
            <Card data={confession} />
            <button>Report</button>
        </div>
    </>
  )
}

export default View