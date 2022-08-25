import axios from '../Axios'
import Card from '../components/Card/Card';
import './Pages.css'
import { useParams } from 'react-router-dom';
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import React, { useEffect, useState } from 'react'

const Search = ({searchParams}) => {
    const [data, setData] = useState([]);
    const [test, setTest] = useState(0)
    const [searchString, setSearchString] = useState(searchParams);
    useEffect(() => {
        
        const getConfessions = async () => {
            try {
                const res = await axios.get(`/confessions/search/?search=${searchParams}`);
                setData(res.data)
            } catch(err) {
                throw err
            }
        }

        getConfessions()

    }, [searchParams]);

    


  return (
    <>
        <CategoryLinks />

        <ConfessionList confessions={data} />

    </>
  )
}

export default Search