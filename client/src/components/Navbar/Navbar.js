import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export class Navbar extends Component {
    constructor() {
        super()
        this.state = {
            active: false,
        }

        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            active: !this.state.active
        })
    }
  render() {
    return (
        <nav>
            <div className='container'>
                    <div className="nav-main center">
                        <span
                            className={`mdi ${this.state.active ? "mdi-close" : "mdi-menu"} nav-toggler`}
                            onClick={this.toggleNav}>
                        </span>
                        <div className="app-title center">
                            <span className="mdi mdi-incognito"></span>
                            <p>
                                Confession App
                            </p>
                        </div>
                    </div>



                    <ul className={this.state.active ? "nav-menu active" : "nav-menu"} >
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Privacy</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Contact</Link>
                        </li>
                        <li className="nav-item-btn">
                            <Link className="nav-btn-submit" to="#">Submit Confession</Link>
                        </li>
                    </ul>

                    <form>
                        <div className="nav-search center">
                            <input type="text" className='search-bar'/>
                            <span className='mdi mdi-magnify'></span>
                        </div>
                    </form>
            </div>
        </nav>
    )
  }
}

export default Navbar