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
                    <div className="nav-toggler">
                        <span
                            className={`mdi ${this.state.active ? "mdi-close" : "mdi-menu"}`}
                            onClick={this.toggleNav}>
                        </span>
                    </div>
                    <div className="app-title">
                        <span className="mdi mdi-incognito"></span>
                        Confession App
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
                        <div className="nav-search">
                            <input type="text" />
                            <span className='mdi mdi-magnify'></span>
                        </div>
                    </form>
            </div>
        </nav>
    )
  }
}

export default Navbar