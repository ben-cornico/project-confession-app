import axios from '../Axios'
import './Pages.css'
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import useGetByCategory from '../Confessions/useGetByCategory';



import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Category() {
    const [pageNumber, setPageNumber] = useState(1);
    const { category } = useParams()
    const data = useGetByCategory(pageNumber, category)
    console.log( data)
  return (
    <>
        <CategoryLinks />
        <ConfessionList confessions={data} />

    </>
  )
}

export default Category