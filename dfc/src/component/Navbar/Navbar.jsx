import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StorContext } from '../Context/StorContext';

const Navbar = ({setshowlogin}) => {

    const [menu,setMenu] = useState("menu");

    const {getTotalCartAmount} = useContext(StorContext)


  return (
    <div className='navbar app'>
        <Link to='/'><img src={assets.logo} alt="" className='logo'/></Link>
            <ul className='navbar-menu'>
                <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
                <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
                <a href='#app-dawnload' onClick={()=>setMenu("mobil-app")} className={menu==="mobil-app"?"active":""}>Mobil-app</a>
                <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact-us</a>
            </ul>
            <div className="navbar-right">
                 <img src={assets.search_icon} alt="" />
                <div className='navbar-search-icon'>
                  <Link to='/cart'><img src={assets.basket_icon} alt=""/></Link>  
                    <div className={getTotalCartAmount()===0?"":"dot"}>
                    </div>
                </div>
                <button onClick={()=>setshowlogin(true)} className='button'>sign in</button>
            </div>
    </div>
  )
}

export default Navbar
