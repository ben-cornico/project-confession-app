import axios from '../Axios'
import Card from '../components/Card/Card';
import './Pages.css'
import { useParams } from 'react-router-dom';
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import React, { useEffect, useState } from 'react';
import useSearchConfession from '../Confessions/useSearchConfession';

const Search = ({searchParams}) => {
    const [test, setTest] = useState(0);
    const [res, setRes] = useState([])
    const [searchString, setSearchString] = useState(searchParams);
    // useEffect(() => {
        
    //     const getConfessions = async () => {
    //         try {
    //             const res = await axios.get(`/confessions/search/?search=${searchParams}`);
    //             setData(res.data)
    //         } catch(err) {
    //             throw err
    //         }
    //     }

    //     getConfessions()

    // }, [searchParams]);

    const data = useSearchConfession(1, searchParams)

    useEffect(() => {
      setRes(data)
    
    }, [data])
    


  return (
    <>
        <CategoryLinks />

        <ConfessionList confessions={res} />

    </>
  )
}

export default Search