import React, { useState, useRef } from 'react'
import { Link, NavLink, useParams, useNavigate } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    const [active, setActive] = useState(false);
    const searchRef = useRef();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let searchString = searchRef.current.value;
        searchRef.current.value = ""
        if(!searchString) return;

        navigate(`/search/?search=${searchString}`, {replace: true});
        window.location.reload(true)
    }

  return (
    <nav>
        <div className='container'>
                <div className="nav-main center">
                    <span
                        className={`mdi ${active ? "mdi-close" : "mdi-menu"} nav-toggler`}
                        onClick={() => setActive(!active)}>
                    </span>
                    <Link to="/" className="app-title center">
                        <span className="mdi mdi-incognito"></span>
                        <p>
                            Confession App
                        </p>
                    </Link>
                </div>



                <ul className={active ? "nav-menu active" : "nav-menu"} >
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" onClick={() => setActive(!active)}>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" onClick={() => setActive(!active)}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/privacy" onClick={() => setActive(!active)}>Privacy</NavLink>
                    </li>
                    <li className="nav-item-btn">
                        <NavLink className="nav-btn-submit" to="/confess"  onClick={() => setActive(!active)}>Submit Confession</NavLink>
                    </li>
                </ul>

                <form onSubmit={handleSubmit}>
                    <div className="nav-search center">
                        <input type="text" className='search-bar' name="search" ref={searchRef} />
                        <span className='mdi mdi-magnify'></span>
                    </div>
                </form>
        </div>
    </nav>

  )
}

export default Navbar