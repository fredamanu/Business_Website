import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { logo } from '../../assets'
import "./Navbar.scss"
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle((prev) => !prev)
    }
    return (
        <nav className="app_navbar">
            <div className='logo_container'>
                <img src={logo} alt="logo" />
            </div>
            <ul className='nav__links'>{["products", "services", "pricing", "contact"].map((link, index) =>
                <li key={index}>
                    <a href={`#${link}`}>
                        {link}
                    </a>
                </li>
            )}</ul>
            {/* <div className='search__icon__container'>
                <SearchIcon />
            </div> */}
            <div className='mobile__menu'>
                {!toggle ? <MenuIcon onClick={handleToggle} /> : <CloseIcon onClick={handleToggle} />}
                {toggle && <ul className='mobile__nav__links'>{["products", "services", "pricing", "contact"].map((link, index) =>
                    <li key={index}>
                        <a href={`#${link}`}>
                            {link}
                        </a>
                    </li>
                )}</ul>}

            </div>

        </nav>
    )
}

export default Navbar