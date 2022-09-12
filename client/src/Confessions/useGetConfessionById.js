import { useEffect, useState } from 'react';
import axios from '../Axios';
import Axios from 'axios'

export default function useGetConfessionById(id) {
    const [confession, setConfession] = useState({})
    const [error, setError] = useState(false)
    console.log(id)
    useEffect(() => {
        axios({
            method: 'GET',
            url: `/confession/${id}`,
        }).then(res => {
            setConfession(res.data);
        }).catch(e => {
            if(axios.isCancel(e)) return
            setError(true)
        })
    }, [id])

  return { confession, error }
}
