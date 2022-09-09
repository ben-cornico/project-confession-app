import { useEffect, useState } from 'react';
import axios from '../Axios';

export default function useSearchConfession(pageNumber, searchQuery) {
    const [confession, setConfession] = useState({})
    useEffect(() => {
        axios({
        method: 'GET',
        url: `/confessions/:id`,
        params: {page: pageNumber-1, q: searchQuery}
        }).then(res => {
            setConfession(res.data);
        }).catch(e => {
            if(axios.isCancel(e)) return
            setError(true)
        })

    }, [pageNumber, searchQuery])

  return confession
}
