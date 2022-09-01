import axios from '../Axios'
import './Pages.css'
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import useGetAll from '../Confessions/useGetAll';
import Card from '../components/Card/Card'



import React, { useState, useCallback, useRef } from 'react'

function Home() {
    const [pageNumber, setPageNumber] = useState(1);
    const nextPage = () => {
      setPageNumber(pageNumber+1)
    }
    const {
      confessions,
      hasMore,
      loading,
      error
    } = useGetAll(pageNumber)

    const observer = useRef()
    const lastConfessionRef = useCallback(node => {
        //props.nextPage();
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting ) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
            }
        })
        if(node) observer.current.observe(node)
    },[loading])

    const data = Object.keys(confessions)
    console.log(data)
  return (
    <>
        <CategoryLinks />
        {
          error ? "AN ERROR HAS OCCURED" : (
            <div className='confession-list'>
              {
                  data.map((confession, index) => {
                      if(data.length === index + 1) {
                          return <Card data={confession} key={index} ref={lastConfessionRef} />
                      } else {
                        console.log("MADI")
                          return <Card data={confession} key={index} />
                      }
                  })
              }

            </div>
          )
        }

    </>
  )
}

export default Home