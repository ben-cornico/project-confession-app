import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom'
import Card from '../components/Card/Card'
import useGetConfessionById from '../Confessions/useGetConfessionById';

function View() {
    const { id } = useParams();
    const {
        confession,
        error
    } = useGetConfessionById(id);
    console.log(confession)
  return (
    <>
        <div className='card-view'>
            <Card data={confession} />
            {/* <div className='confession-card'>
                <div className="confession-card-head">
                    <Link className={`confession-card-category Pain-link cat-link`} to={`/Pain}`}>
                        Pain
                    </Link>
                    <div className="confession-card-time">
                        {moment("Wed Sep 07 2022 23:26:02 GMT-0700").fromNow()}
                    </div>
                </div>

                <div className="confession-card-body">
                Donec porta euismod lacus. Fusce tincidunt aliquet nibh, quis tincidunt est commodo sit amet. Curabitur cursus orci non augue iaculis luctus eget non leo. Donec vel augue non enim rutrum posuere eget vel sem. Ut et tristique dolor. Sed in diam varius, auctor elit sed, pellentesque arcu. Integer posuere tristique libero, a pretium nisl aliquet et. Duis eros sem, ullamcorper vitae felis id, ultrices consequat arcu.
                </div>

                <div className="views-counter">
                0
                </div>
            </div> */}
            <button>Report</button>
        </div>
    </>
  )
}

export default View