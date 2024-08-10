import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import hamburger from '/assets/shared/icon-hamburger.svg';
import close from '/assets/shared/icon-close.svg';
import logo from './assets/shared/logo.svg';
export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);


    const toogleMenu = () => {
        setMenuOpen(prevState => !prevState)
    }
    const icon = menuOpen ? close: hamburger

    

    const all = document.querySelectorAll('.nav-item');

    console.log(all)


    function removeMe() {
         all.forEach(item => {
          item.classList.remove('active')
         })
    }
    const end = all.forEach(item=> {
       item.addEventListener('click', () => {
        removeMe()
             item.classList.add('active')
       })
    })

    return (
        <div className='space'>
            <nav className='expandend-nav--bar'>
           <div id='start-logo'>
              <img src={logo} alt="logo"/>
           </div>
           <div className='divider'></div>
           <button className={menuOpen ? 'menu active' : 'menu'}  onClick={toogleMenu}>
                <img src={icon} alt="menu-icon"/>
           </button>
           <ul className={menuOpen ? 'nav-bar active' : 'nav-bar'}>
           <button className='menu close'  onClick={toogleMenu}>
                <img src={icon} alt="menu-icon"/>
           </button>
             <li className='nav-item nav-1 '>
             <Link to='/'>00 Home</Link>  
             </li>
             <li className='nav-item'>
             <Link to='/Destination'>01 Destination</Link>  </li>
             <li className='nav-item'>
             <Link to='/CrowSlide'>02 Crew</Link>  
            </li>
             <li className='nav-item'> <Link to="Technology"> 03 Technology</Link> </li>
           </ul>
        </nav>
        </div>
    )
}