import axios from '../Axios'
import './Pages.css'
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import useGetByCategory from '../Confessions/useGetByCategory';
import Card from '../components/Card/Card'



import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Category() {
    const [pageNumber, setPageNumber] = useState(1);
    const { category } = useParams()


    useEffect(() => {
      setPageNumber(1)
    
    }, [category])

    const {
      confessions,
      hasMore,
      loading,
      error
    } = useGetByCategory(pageNumber, category);
    
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

export default Category