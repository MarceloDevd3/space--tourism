import {useState} from 'react';
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
        <nav className='expandend-nav--bar'>
           <div id='start-logo'>
              <img src={logo} alt="logo"/>
           </div>
           <div className='divider'></div>
           <button className={menuOpen ? 'menu active' : 'menu'}    onClick={toogleMenu}>
                <img src={icon} alt="menu-icon"/>
           </button>
           <ul className={menuOpen ? 'nav-bar active' : 'nav-bar'}>
             <li className='nav-item '><a href='#' className='nav-link'>00 Home</a></li>
             <li className='nav-item'><a href='#' className='nav-link'>
             01 Destination</a></li>
             <li className='nav-item'><a href='#' className='nav-link'>
             02 Crew</a></li>
             <li className='nav-item'><a href='#' className='nav-link'>
             03 Technology</a></li>
           </ul>
        </nav>
    )
}