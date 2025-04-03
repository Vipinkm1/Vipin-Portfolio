import React, { useState } from 'react'
import Logo from '../../assets/logo.png'
import { AiOutlineHome } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";
import { IoLayersOutline } from "react-icons/io5";
import { VscGithubProject } from "react-icons/vsc";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiContactsLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenu = () => {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        <div className='nav-border'  >
            <div className='nav-item'>
                <Link to={'/'} className='logo-container' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <img className='logo-size' src={Logo} />
                </Link>
                <div className={`nav-container ${isOpen ? 'active' : ' '}`}>
                    <Link to={'/'} className='nav show-active'  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'}) } >
                        <AiOutlineHome className='icon' />
                        <p>Home</p>
                    </Link>
                    <Link to={'/about'} className='nav '  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'}) }>
                        <PiUserCircle className='icon' />
                        <p>About</p>
                    </Link>
                    <Link to={'/services'} className='nav' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'}) } >
                        <IoLayersOutline className='icon' />
                        <p>Services</p>
                    </Link>
                    <Link to={'/project'} className='nav'  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'}) }>
                        <VscGithubProject className='icon' />
                        <p>Project</p>
                    </Link>
                    <Link to={'/contact'} className='nav'  onClick={() => window.scrollTo({top: 0, behavior: 'smooth'}) }>
                        <RiContactsLine className='icon' />
                        <p>Contact</p>
                    </Link>
                </div>
                <Link to={'/contact'}>
                    <button className='lets-talk'>Let's Talks</button>
                </Link>
                <div className='hamburger-menu-bar' onClick={handleMenu}>
                    <GiHamburgerMenu />
                </div>
            </div>
        </div>
    )
}
export default Navbar