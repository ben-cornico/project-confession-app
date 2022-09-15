import { useState, useEffect } from 'react'
import axios from '../Axios'

export default function (pageNumber, category) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(false)
    const [confessions, setConfessions] = useState([])
    useEffect(() => {
      const getConfessions = async () => {
        try {
          const res = await axios.get(`/confessions/${category}?page=${pageNumber-1}`)
          
          if(pageNumber === 1) {
            //if page 1 starts a new list
            setConfessions([...res.data]);
          } else {
            setConfessions([...confessions, ...res.data]);
          }
          setHasMore(res.data.setLoading > 0);
          setLoading(false)
        } catch(error) {
          if(axios.isCancel(error)) return;
          setError(true)
        }
      }
      
      getConfessions()
    
    }, [pageNumber, category])
    return {confessions, loading, error, hasMore}
}
