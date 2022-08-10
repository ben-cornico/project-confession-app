import React, { Component } from 'react';
import { getAll } from '../Data';
import Card from '../components/Card/Card';
import './Pages.css'

export class Home extends Component {
    constructor() {
        super();

        this.state = {
            confessions: getAll(),
        }
        console.log(this.state)
    }
    
    render() {
        return (
            <div className='confession-list'>
                {
                    this.state.confessions.map((confession, index) => {
                        return (
                            <Card data={confession} />
                        )
                    })
                }
            </div>
        )
    }
}

export default Home