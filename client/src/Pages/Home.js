import axios from '../Axios'
import Card from '../components/Card/Card';
import './Pages.css'
import { useParams } from 'react-router-dom';



import React, { useEffect, useState } from 'react'

function Home(props) {
    const [data, setData] = useState([]);
    let { category } = useParams();
    useEffect(() => {
        const getConfessions = async () => {
            try {
                const res = await axios.get(category ? `/confessions/${category}` : '/confessions');
                setData(res.data)
            } catch(err) {
                throw err
            }
        }

        getConfessions()
    }, [category])
    
    
  return (
    <div className='confession-list'>
        {
            data.map((confession, index) => {
                return (
                    <Card data={confession} key={confession._id} selectCat={props.selectCat}/>
                )
            })
        }

    </div>
  )
}

export default Home