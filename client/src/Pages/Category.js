import './Pages.css'
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import useGetByCategory from '../Confessions/useGetByCategory';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

function Category() {
    const [pageNumber, setPageNumber] = useState(1);
    const { category } = useParams()

    useEffect(() => {
      setPageNumber(1)
    
    }, [category])

    const {
      confessions,
      hasMore,
      loading,
      error
    } = useGetByCategory(pageNumber, category);
    
  //  console.log(confessions)

  //   const lastConfessionRef = useCallback(node => {
  //     if(observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver(entries => {
  //         if(entries[0].isIntersecting && hasMore) {
  //           setPageNumber(prevPageNum => {
  //             return prevPageNum + 1
  //           });
  //         }
  //     })
  //     if(node) observer.current.observe(node)
  // },[loading])

  const nextPage = () => {
    setPageNumber(prevPageNum => {
      return prevPageNum + 1
    });
  }
  return (
    <>
        <CategoryLinks />
        {
          error ? "AN ERROR HAS OCCURED" : (
            // <div className='confession-list'>
            // {
            //     confessions.map((confession, index) => {
            //         if(confessions.length === index + 1) {
            //             return <Card data={confession} key={index} ref={lastConfessionRef} />
            //         } else {
            //             return <Card data={confession} key={index} />
            //         }
            //     })
            // }

            // </div>

            <ConfessionList data={{confessions, loading, pageNumber, hasMore}} nextPage={nextPage}/>
          )
        }

    </>
  )
}

export default Category