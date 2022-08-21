import React, { Component } from 'react'

export class ConfessionList extends Component {
  render() {
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
}

export default ConfessionList