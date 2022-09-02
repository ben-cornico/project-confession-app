import React, { useEffect, useState } from 'react';
import axios from '../Axios'

export default function useGetAll(pageNumber) {

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
        console.log(res.data)
        setConfessions(res.data)
        setHasMore(res.data > 0);
        setLoading(false)
      }).catch(e => {
        if(axios.isCancel(e)) return
        setError(true)
      })

    }, [pageNumber])

  return {confessions, loading, error, hasMore}
}
