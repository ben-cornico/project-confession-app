import axios from '../Axios'
import Card from '../components/Card/Card';
import './Pages.css'
import { useParams } from 'react-router-dom';
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';



import React, { useEffect, useState } from 'react'

function Home({searchParams}) {
    console.log(searchParams)
    const [data, setData] = useState([]);
    let { category } = useParams();
    let link = ""
    if(!searchParams) {
        link = category ? `/confessions/${category}` : '/confessions';
        console.log("NOT SEARCH")
    } else {
        link = `/confessions/search/?search=${searchParams}`
        console.log("SEARCH")
    }
    useEffect(() => {
        const getConfessions = async () => {
            try {
                const res = await axios.get(link);
                setData(res.data)
            } catch(err) {
                throw err
            }
        }

        getConfessions()
    }, [link])
  return (
    <>
        <CategoryLinks />

        <ConfessionList confessions={data} />

    </>
  )
}

export default Home