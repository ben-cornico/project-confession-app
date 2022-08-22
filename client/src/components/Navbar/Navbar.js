// import React, { Component } from 'react'
// import { Link, NavLink, useSearchParams } from 'react-router-dom';
// import './Navbar.css'

// export class Navbar extends Component {
//     constructor() {
//         super()
//         this.state = {
//             active: false,
//         }

//         this.toggleNav = this.toggleNav.bind(this)
//     }

//     toggleNav() {
//         this.setState({
//             active: !this.state.active
//         })
//     }

//     handleSubmit(e) {
        
//     }
//   render() {
//     return (
        // <nav>
        //     <div className='container'>
        //             <div className="nav-main center">
        //                 <span
        //                     className={`mdi ${this.state.active ? "mdi-close" : "mdi-menu"} nav-toggler`}
        //                     onClick={this.toggleNav}>
        //                 </span>
        //                 <div className="app-title center">
        //                     <span className="mdi mdi-incognito"></span>
        //                     <p>
        //                         Confession App
        //                     </p>
        //                 </div>
        //             </div>



        //             <ul className={this.state.active ? "nav-menu active" : "nav-menu"} >
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="/">Home</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="#">About</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="#">Privacy</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink className="nav-link" to="#">Contact</NavLink>
        //                 </li>
        //                 <li className="nav-item-btn">
        //                     <NavLink className="nav-btn-submit" to="/confess">Submit Confession</NavLink>
        //                 </li>
        //             </ul>

        //             <form onSubmit={this.handleSubmit}>
        //                 <div className="nav-search center">
        //                     <input type="text" className='search-bar' name="search" />
        //                     <span className='mdi mdi-magnify'></span>
        //                 </div>
        //             </form>
        //     </div>
        // </nav>
//     )
//   }
// }

// export default Navbar

import React, { useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom';
import './Navbar.css'

function Navbar({submitSearch}) {
    const [active, setActive] = useState(false);
    const handleSubmit = (e) => {
        submitSearch(e)
    }

  return (
    <nav>
        <div className='container'>
                <div className="nav-main center">
                    <span
                        className={`mdi ${active ? "mdi-close" : "mdi-menu"} nav-toggler`}
                        onClick={() => setActive(!active)}>
                    </span>
                    <div className="app-title center">
                        <span className="mdi mdi-incognito"></span>
                        <p>
                            Confession App
                        </p>
                    </div>
                </div>



                <ul className={active ? "nav-menu active" : "nav-menu"} >
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">Privacy</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="#">Contact</NavLink>
                    </li>
                    <li className="nav-item-btn">
                        <NavLink className="nav-btn-submit" to="/confess">Submit Confession</NavLink>
                    </li>
                </ul>

                <form onSubmit={handleSubmit}>
                    <div className="nav-search center">
                        <input type="text" className='search-bar' name="search" />
                        <span className='mdi mdi-magnify'></span>
                    </div>
                </form>
        </div>
    </nav>

  )
}

export default Navbar