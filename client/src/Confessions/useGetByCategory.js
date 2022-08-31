import { useState, useEffect } from 'react'
import axios from '../Axios'

export default function (pageNumber, category) {

    const [confessions, setConfessions] = useState([])
    useEffect(() => {
      axios({
        method: 'GET',
        url: `/confessions/${category}`,
        params: {page: pageNumber-1}
      }).then(res => {
        setConfessions(res.data)
      })
    
    }, [pageNumber])
    return confessions
}
