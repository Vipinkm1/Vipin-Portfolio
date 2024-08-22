import React from 'react'
import Logo from '../../assets/logo.png'
import { AiOutlineHome } from "react-icons/ai";
import { PiUserCircle } from "react-icons/pi";
import { IoLayersOutline } from "react-icons/io5";
import { VscGithubProject } from "react-icons/vsc";
import { RiBloggerLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Navbar = ({onNavigate}) => {
    const navigate = useNavigate()
  return (
    <div className='nav-border'>
        <div className='nav-item'>
            <div className='logo-container'>
                <img className='logo-size' src={Logo} onClick={() => navigate('/')}/>
            </div>
            <div className='nav-container'>
                <div className='nav show-active' onClick={() => onNavigate('Detail')} >
                    <AiOutlineHome className='icon'/>
                    <p>Home</p>
                </div>
                <div className='nav '  onClick={()=> onNavigate('about')}>
                    <PiUserCircle className='icon'/>
                    <p>About</p>
                </div>
                <div className='nav' onClick={() => onNavigate('services')}>
                    <IoLayersOutline className='icon'/>
                    <p>Services</p>
                </div>
                <div className='nav' onClick={()=> onNavigate('project')}>
                    <VscGithubProject className='icon'/>
                    <p>Project</p>
                </div>
                <div className='nav' onClick={() => onNavigate('blog')}>
                    <RiBloggerLine className='icon'/>
                    <p>Blog</p>
                </div>
                <div className='nav' onClick={() => onNavigate('contact')}>
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