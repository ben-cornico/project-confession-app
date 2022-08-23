import axios from '../Axios'
import Card from '../components/Card/Card';
import './Pages.css'
import { useParams } from 'react-router-dom';
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';



import React, { useEffect, useState } from 'react'

function Home(props) {
    const [data, setData] = useState([]);
    let { category } = useParams();
    console.log(props)
    useEffect(() => {
        const getConfessions = async () => {
            try {
                const res = await axios.get(category ? `/confessions/${category}` : '/confessions');
                setData(res.data)
            } catch(err) {
                throw err
            }
        }

        getConfessions()
    }, [category])
  return (
    <>
        <CategoryLinks />

        <ConfessionList confessions={data} />

    </>
  )
}

export default Home