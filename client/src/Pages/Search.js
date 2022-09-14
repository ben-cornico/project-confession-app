
import './Pages.css'
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import React, { useState } from 'react';
import useSearchConfession from '../Confessions/useSearchConfession';

const Search = ({searchParams}) => {
    const [pageNumber, setPageNumber] = useState(1);
    const {
      confessions,
      hasMore,
      loading,
      error
    } = useSearchConfession(pageNumber, searchParams);

    const nextPage = () => {
      setPageNumber(prevPageNum => {
        return prevPageNum + 1
      });
    }

  return (
    <>
        <CategoryLinks />
        {
          error ? "AN ERROR HAS OCCURED" : <ConfessionList data={{confessions, loading, pageNumber, hasMore}} nextPage={nextPage}/>
        }
        

    </>
  )
}

export default Search