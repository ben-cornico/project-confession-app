import axios from '../Axios'
import './Pages.css'
import { useParams } from 'react-router-dom';
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';



import React, { useEffect, useState } from 'react'

function Home({searchParams}) {
    console.log(searchParams)
    const [data, setData] = useState([]);
    let { category } = useParams();
    let link = category ? `/confessions/${category}` : '/confessions';
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

    useEffect(() => {
    const handleScroll = event => {
      //console.log('window.scrollY', window.scrollY);
      let endOfPage = (window.innerHeight + window.scrollY >= document.body.offsetHeight)
        if(endOfPage) {
            console.log("END")
        } else {
            console.log("KEEP GOING")
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <CategoryLinks />

        <ConfessionList confessions={data} />

    </>
  )
}

export default Home