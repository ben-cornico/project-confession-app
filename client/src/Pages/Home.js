import './Pages.css'
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import useGetAll from '../Confessions/useGetAll'

import React, { useState } from 'react'

function Home() {
    const [pageNumber, setPageNumber] = useState(1);
    
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