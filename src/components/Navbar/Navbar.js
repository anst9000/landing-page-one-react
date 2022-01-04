import { useState } from 'react';
import logo from '../../images/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import './Navbar.css'

export const  Navbar  = () => {
  const [click, setClick] = useState(false)
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <div className="navbar" id="navbar">
        <Link href="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>

        <div className="hamburger" onClick={handleClick}>
          {
            click ?
              (<FaTimes size={30} style={{color: '#eeeeee'}} />)
                :
              (<FaBars size={30} style={{color: '#eeeeee'}} />)
          }
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item"><Link spy={true} smooth={true} duration={500} offset={0} onClick={closeMenu} to="hero">Home</Link></li>
          <li className="nav-item"><Link spy={true} smooth={true} duration={500} offset={0} onClick={closeMenu} to="about">About</Link></li>
          <li className="nav-item"><Link spy={true} smooth={true} duration={500} offset={0} onClick={closeMenu} to="testimonials">Testimonials</Link></li>
          <li className="nav-item"><Link spy={true} smooth={true} duration={500} offset={0} onClick={closeMenu} to="demo">Demo</Link></li>
        </ul>

      </div>
    </div>
  )
};

export default Navbar;
