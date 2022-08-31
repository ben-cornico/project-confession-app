import axios from '../Axios'
import './Pages.css'
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import useGetAll from '../Confessions/useGetAll'



import React, { useState } from 'react'

function Home() {
    const [pageNumber, setPageNumber] = useState(1);
    
    
    const data = useGetAll(pageNumber)

  return (
    <>
        <CategoryLinks />

        <ConfessionList confessions={data} />

    </>
  )
}

export default Home