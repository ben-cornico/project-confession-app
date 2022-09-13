import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'
import Card from '../components/Card/Card'
import useGetConfessionById from '../Confessions/useGetConfessionById';
import axios from '../Axios'

function View() {
    const { id } = useParams();    
    const {
        confession,
        error
    } = useGetConfessionById(id);
  return (
    <>
        <div className='card-view'>
          {
            error ? "AN ERROR HAS OCCURED" : <Card data={confession} />
          }
            
        </div>
    </>
  )
}

export default View