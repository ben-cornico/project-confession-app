import axios from '../Axios'
import './Pages.css'
import CategoryLinks from '../components/CategoryLinks/CategoryLinks';
import ConfessionList from '../components/ConfessionList/ConfessionList';
import useGetAll from '../Confessions/useGetAll'

import Card from '../components/Card/Card'

import React, { useState, useRef, useCallback } from 'react'

function Home() {
    const [pageNumber, setPageNumber] = useState(1);
    const observer = useRef()
    
    const {
      confessions,
      hasMore,
      loading,
      error
    } = useGetAll(pageNumber)
    const lastConfessionRef = useCallback(node => {
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting ) {
                nextPage()
            }
        })
        if(node) observer.current.observe(node)
    },[loading])
    const nextPage = () => {
      setPageNumber(pageNumber+1)
      console.log(":")
    }

  return (
    <>
        <CategoryLinks />
        {
          error ? "AN ERROR HAS OCCURED" : (
            <div className='confession-list'>
            {
                confessions.map((confession, index) => {
                    if(confessions.length === index + 1) {
                        return <Card data={confession} key={index} ref={lastConfessionRef} />
                    } else {
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