import React, { useState } from 'react'
import { IoCopyOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { MdOutlineWavingHand } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import Vipinphoto from '../../assets/vipinkumar-logo.png'

const Profile = () => {
  //  text copy function and logic is here
  const [copied, setCopied] = useState(false)
  const textToCopy = 'vipinkm1654@gmail.com';
  const handleCopy = () => {
    //  copy the text email for the inqury perpose
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        setCopied(true)
        console.log('Text is copy')
        setTimeout(() => setCopied(false), 2000)
      })
      //  if the text is not copy then show the not 
      .catch((error) => {
        console.log('Text is not copy', error)
      })
  }
  return (
    <div className='profile-border'>
      <div className='profile-img-upper'>
        <div className='img-container'>
          <img className='profile-logo-size' src={Vipinphoto} />
        </div>
      </div>
      {/*  profile page */}
      <div className='person-name'>Vipin Kumar  <span c><MdOutlineWavingHand className='waving-hand' /> </span></div>
      <div className='introduction-part'>A Passionate <span className='highlight-text'>Full Stack Developer</span> 🖥️ & Frontend Developer having 2+ year of Experiences over .</div>
      <div className='two-btn'>

        <div className=' call-section bg-btn'>
          <GoDownload className='call-icon' />
          <a href='https://drive.google.com/file/d/1gh8gx9FXGgen2VAZI29dWwVJAV58Mz4m/view?usp=sharing'>
            <button className='book-btn'> Resume</button>
          </a>
        </div>
        <div className='call-section  copy-bg'>
          <IoCopyOutline className='call-icon ' />
          <button className='book-btn font-copy' onClick={handleCopy}>{copied ? 'Copied!' : 'Copy Email'}</button>
        </div>
      </div>
      {/*  Social icon added the below of this container */}
      <div className='social-icon'>
        <a href='#'><FaInstagram className='insta' /> </a>
        <a href='https://www.linkedin.com/in/kumar-vipin1/'><RiLinkedinBoxLine className='insta' /> </a>
        <a href='https://github.com/Vipinkm1'><FaGithub className='insta' /></a>
        <a href='#'><CiTwitter className='insta' /></a>
      </div>
    </div>
  )
}
export default Profile
