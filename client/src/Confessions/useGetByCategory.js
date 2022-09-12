import { useState, useEffect } from 'react'
import axios from '../Axios'

export default function (pageNumber, category) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false)
    const [confessions, setConfessions] = useState([])
    useEffect(() => {
      console.log(category)
      axios({
        method: 'GET',
        url: `/confessions/${category}`,
        params: {page: pageNumber-1}
      }).then(res => {
        if(pageNumber === 1) {
          setConfessions([...res.data]);
        } else {
          setConfessions([...confessions, ...res.data]);
        }
        setHasMore(res.data.length > 0)
        console.log(res.data)
        setLoading(false)
      }).catch(e => {
        if(axios.isCancel(e)) return
        setError(true)
      })

      // axios.get(`/confessions/${category}`)
      //   .then(res => {
      //     setConfessions([...confessions, ...res.data]);
      //   })
    
    }, [pageNumber, category])
    return {confessions, loading, error, hasMore}
}
