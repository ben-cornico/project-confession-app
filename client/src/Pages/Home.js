import axios from '../Axios'
import './Pages.css'
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import useGetAll from '../Confessions/useGetAll'

import Card from '../components/Card/Card'

import React, { useState, useRef, useCallback, useEffect } from 'react'

function Home() {
    const [pageNumber, setPageNumber] = useState(1);
    const [current, setCurrent] = useState([])
    const observer = useRef()
    
    const {
      confessions,
      hasMore,
      loading,
      error
    } = useGetAll(pageNumber);
  const nextPage = () => {
    setPageNumber(prevPageNum => {
      return prevPageNum + 1
    });
  }
  return (
    <>
        <CategoryLinks />
        {
          error ? "AN ERROR HAS OCCURED" : (

            <ConfessionList data={{confessions, loading, pageNumber, hasMore}} nextPage={nextPage}/>
          )
        }

    </>
  )
}

export default Home