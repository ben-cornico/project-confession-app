import axios from '../Axios'
import './Pages.css'
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import useGetAll from '../Confessions/useGetAll'



import React, { useEffect, useState } from 'react'

function Home() {
    const data = useGetAll(1)
    //const [data, setData] = useState([]);
    //let { category } = useParams();
    //let link = category ? `/confessions/${category}` : '/confessions';
    // useEffect(() => {
    //     const getConfessions = async () => {
    //         try {
    //             const res = await axios.get(link);
    //             setData(res.data)
    //         } catch(err) {
    //             throw err
    //         }
    //     }

    //     getConfessions()
    // }, [link])


    const [pageNumber, setPageNumber] = useState(1);
    

  return (
    <>
        <CategoryLinks />

        <ConfessionList confessions={data} />

    </>
  )
}

export default Home