import React, { useEffect, useState } from 'react';
import axios from '../Axios'

export default function useGetAll(pageNumber) {
  console.log("GET ALL")
    const [confessions, setConfessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false)
    useEffect(() => {
      
      axios({
        method: 'GET',
        url: '/confessions',
        params: {page: pageNumber-1}
      }).then(res => {
        setConfessions([...confessions, ...res.data])
        setHasMore(res.data.length > 0);
        setLoading(false)
      }).catch(e => {
        if(axios.isCancel(e)) return
        setError(true)
      })

      console.log("USE EFFECT")
    }, [pageNumber])

  console.log(confessions)
  return {confessions, loading, error, hasMore}
}
