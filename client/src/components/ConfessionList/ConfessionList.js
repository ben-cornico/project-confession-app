import React, { useRef, useCallback }from 'react'
import Card from '../Card/Card';
import './ConfessionList.css'


function ConfessionList(props) { 
    console.log(props.data)
    const { confessions, loading, pageNumber } = props.data
    const observer = useRef()
    const lastConfessionRef = useCallback(node => {
        //props.nextPage();
        if(observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting ) {
                console.log("PREV PAGE", pageNumber)
                props.nextPage(pageNumber + 1)
            }
        })
        if(node) observer.current.observe(node)
    },[loading])

    return (
        <div className='confession-list'>
            {
                confessions.map((confession, index) => {
                    if(confessions.length === index + 1) {
                        return <Card data={confession} key={index} ref={lastConfessionRef} />
                    } else {
                        return <Card data={confession} key={index} />
                    }
                })
            }

            <div>{loading && "LOADING..."}</div>

        </div>
    )
}

export default ConfessionList

