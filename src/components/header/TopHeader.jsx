import './header.css'

import { Link } from 'react-router-dom'
import Logo from '../../img/logo.png'

// React icons
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

export default function TopHeader() {
    return (
        <div className='top-header'>
            <div className="container">
                <Link className='logo' to="/"><img src={Logo} alt="Logo" /></Link>
                <form action="" className="search-box">
                    <input type="text" id='search' name='search' placeholder='search for products' />
                    <button type="submit"><FaSearch /></button>
                </form>
                <div className="header-icons">
                    <div className="icon"><FaRegHeart /><span className='count'>0</span></div>
                    <div className="icon"><TiShoppingCart /><span className='count'>0</span></div>
                </div>
            </div>
        </div>
    )
}
