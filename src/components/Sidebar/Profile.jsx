import React from 'react'
import { PiPhoneCallThin } from "react-icons/pi";
import { IoCopyOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { MdOutlineWavingHand } from "react-icons/md";
import Student from '../../assets/student.png'
// import VipinKumarLogo from '../../assets/vipinkumar-logo.png'
const Profile = () => {
  return (
    <div className='profile-border'>
        <div className='profile-img-upper'>
        <div className='img-container'>
         <img className='profile-logo-size' src={Student}/>
        </div>
        </div>
        {/*  profile page */}
        <div className='person-name'>Vipin Kumar  <span c><MdOutlineWavingHand className='waving-hand'/> </span></div>
        <div className='introduction-part'>A Passionate <span className='highlight-text'>Full Stack Developer</span> 🖥️ & Product Designer having 6 month of Experiences over .</div>
        <div className='two-btn'>
          <div className=' call-section bg-btn'>
            <PiPhoneCallThin className='call-icon'/>
            <button className='book-btn'>Book A Call</button>
          </div>
          <div className='call-section  copy-bg'>
            <IoCopyOutline className='call-icon '/>
            <button className='book-btn font-copy'>Copy Link</button>
          </div>
        </div>
        {/*  Social icon added the below of this container */}
        <div className='social-icon'>
          <FaInstagram className='insta'/>
          <RiLinkedinBoxLine className='insta'/>
          <FaGithub className='insta'/>
          <CiTwitter className='insta'/>
        </div>
    </div>
  )
}

export default Profile