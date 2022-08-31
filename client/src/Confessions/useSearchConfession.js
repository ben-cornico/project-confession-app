import { useEffect, useState } from 'react';
import axios from '../Axios';

export default function useSearchConfession(pageNumber, searchQuery) {
    const [confessions, setConfessions] = useState([])
    useEffect(() => {
        axios({
        method: 'GET',
        url: `/confessions/search`,
        params: {page: pageNumber-1, q: searchQuery}
        }).then(res => {
            console.log(res.data)
            setConfessions(res.data)
        })

    }, [pageNumber, searchQuery])
  return confessions
}
