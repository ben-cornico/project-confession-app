import React, { useEffect, useState } from 'react';
import axios from '../Axios'

export default function useGetAll(pageNumber) {

    const [confessions, setConfessions] = useState([])
    useEffect(() => {
      axios({
        method: 'GET',
        url: '/confessions',
        params: {page: "TESTINGLANG"}
      }).then(res => {
        setConfessions(res.data)
      })
    
    }, [pageNumber])
    
  return confessions
}
