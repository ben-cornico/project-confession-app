import { useEffect, useState } from 'react';
import axios from '../Axios';
import Axios from 'axios'

export default function useGetConfessionById(id) {
    const [confession, setConfession] = useState({})
    const [error, setError] = useState(false)
    const source = Axios.CancelToken.source();
    useEffect(() => {
        axios({
            method: 'GET',
            url: `/confession/${id}`,
        }).then(res => {
            console.log(res.data)
            setConfession(res.data);
        }).catch(e => {
            if(axios.isCancel(e)) return
            setError(true)
        })
        return () => {
            source.cancel();
        }
    }, [])

  return null
}
