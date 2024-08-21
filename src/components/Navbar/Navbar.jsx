import React from 'react'
import Logo from '../../assets/logo.png'
import { AiOutlineHome } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";
import { IoLayersOutline } from "react-icons/io5";
import { VscGithubProject } from "react-icons/vsc";
import { RiBloggerLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
const Navbar = () => {
  return (
    <div className='nav-border'>
        <div className='nav-item'>
            <div className='logo-container'>
                <img className='logo-size' src={Logo}/>
            </div>
            <div className='nav-container'>
                <div className='nav show-active '>
                    <AiOutlineHome className='icon'/>
                    <p>Home</p>
                </div>
                <div className='nav '>
                    <PiUserCircle className='icon'/>
                    <p>About</p>
                </div>
                <div className='nav'>
                    <IoLayersOutline className='icon'/>
                    <p>Services</p>
                </div>
                <div className='nav'>
                    <VscGithubProject className='icon'/>
                    <p>Project</p>
                </div>
                <div className='nav'>
                    <RiBloggerLine className='icon'/>
                    <p>Blog</p>
                </div>
                <div className='nav'>
                    <RiContactsLine className='icon'/>
                    <p>Contact</p>
                </div>
            </div>
            <div>
                <button className='lets-talk'>Let's Talks</button>
            </div>

        </div>
    </div>
  )
}

export default Navbar