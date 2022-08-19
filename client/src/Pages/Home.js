import axios from '../Axios'
import Card from '../components/Card/Card';
import './Pages.css'



import React, { useEffect, useState } from 'react'

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {

        const getConfessions = async () => {
            try {
                const res = await axios.get('/confessions');
                setData(res.data)
            } catch(err) {
                throw err
            }
        }

        getConfessions()


    
    }, [])
    
    
  return (
    <div className='confession-list'>
        {
            data.map((confession, index) => {
                return (
                    <Card data={confession} key={confession._id}/>
                )
            })
        }

    </div>
  )
}

export default Home