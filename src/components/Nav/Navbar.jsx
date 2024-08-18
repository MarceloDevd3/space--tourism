import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import hamburger from './shared/icon-hamburger.svg';
import close from './shared/icon-close.svg';
import logo from './shared/logo.svg';
export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);


    const toogleMenu = () => {
        setMenuOpen(prevState => !prevState)
    }

    const all = document.querySelectorAll('.nav-item');

    function removeMe() {
         all.forEach(item => {
          item.classList.remove('active')
         })
    }
  
     all.forEach(item=> {
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
           <button className={menuOpen ? 'menu active' : 'menu'}  onClick={toogleMenu} >
                <img src={hamburger} alt="menu-icon" className='menu-open' />
           </button>
           <ul className={menuOpen ? 'nav-bar active' : 'nav-bar'}>
           <button className='menu close'  onClick={toogleMenu}>
                <img src={close} alt="menu-icon" className='menu-close'/>
           </button>
             <li id="pad-top" className='nav-item active '>
             <Link to='/'>00 Home</Link>  
             </li>
             <li className='nav-item'>
             <Link to='/Destination'>01 Destination</Link>  </li>
             <li className='nav-item'>
             <Link to='/CrowSlide'>02 Crew</Link>  
            </li>
             <li className='nav-item'> <Link to="Tecnology"> 03 Technology</Link> </li>
           </ul>
        </nav>
        </div>
    )
}