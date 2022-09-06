import axios from '../Axios'
import Card from '../components/Card/Card';
import './Pages.css'
import { useParams } from 'react-router-dom';
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import React, { useEffect, useState, useRef } from 'react';
import useSearchConfession from '../Confessions/useSearchConfession';

const Search = ({searchParams}) => {
    const [searchString, setSearchString] = useState(searchParams);
    const [pageNumber, setPageNumber] = useState(1);
    const observer = useRef()
    const {
      confessions,
      hasMore,
      loading,
      error
    } = useSearchConfession(pageNumber, searchString);

    const nextPage = () => {
      setPageNumber(prevPageNum => {
        return prevPageNum + 1
      });
    }

    console.log(confessions)
  return (
    <>
        <CategoryLinks />

        <ConfessionList data={{confessions, loading, pageNumber, hasMore}} nextPage={nextPage}/>

    </>
  )
}

export default Search