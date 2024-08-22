import React, { useEffect, useState } from 'react'
import Vedio from '../../../assets/video.png'
import { CiImageOn } from "react-icons/ci";


const About = () => {


  //  show the animation count value here logic
  const [yearsExperience, setYearsExperience] = useState(0);
  const [projectCompletion, setProjectCompletion] = useState(0);
  const [happyClient, setHappyClient] = useState(0);
//  do setInterval timing here
  useEffect(() => {
    const animatedCount = (setCount, target) => {
       let count = 0;
       const interval = setInterval(() => {
        count += 1;
        setCount(count)
        if(count === target){
          clearInterval(interval)
        }
       } ,30)
    }
    //  show value here
    animatedCount(setYearsExperience, 40)
    animatedCount(setProjectCompletion, 40)
    animatedCount(setHappyClient, 40)
    return () => {
      clearInterval(animatedCount)
    }
  }, [])
  const BrandShow = [
    {id: 1},
    {id: 2},
    {id: 3},
    {id: 4},
    {id: 5},
    {id: 6},
    {id: 7},
    {id: 8},
    {id: 9},
    {id: 10}
  ]
  return (
    <div className='about-border'>
    <div className='about-flex-item'>
      <div>
        <p className='name-intro'><span  className='black-quote'>Hi, This Is</span> Vipin Kumar 👋</p>
      </div>
      <div className='available-flex'>
        <p className='name-intro available-font'>I'm Available</p>
        <img className='vedio-size' src={Vedio}/>
      </div>
      </div>
      {/* Show some quote here  */}
      <div className='quote-text'>
        <p className='name-intro'>A Passionate <span className='black-quote'>Full Stack Developer </span>🖥️ & <span className='black-quote'>Frontend Developer</span> having <span>1 years</span> of Experiences over 24+ Country Worldwide.</p>
      </div>
      {/* show the experience in the count wise also show the project completion */}
      <div className='experience-count-show'>
        <div className='years-of-experience '>
          <p className='name-intro count-year'>{yearsExperience}+</p>
          <p className='year-size-color'>Year of experience</p>
        </div>
        <div className='years-of-experience'>
          <p className='name-intro count-year'>{projectCompletion}+</p>
          <p className='year-size-color'>Project Completion</p>
        </div>
        <div className='years-of-experience'>
          <p className='name-intro count-year'>{happyClient}+</p>
          <p className='year-size-color'>Happy Client</p>
        </div>
      </div>
      <div className='show-brand-title'>
        <p className='name-intro brand-title'>Working With 50+ Brands ✨ Worldwide</p>
      </div>
      {/*  show the brand image list here */}
        <div className='brand-img'>
        {BrandShow.map((brandItem,id)=>(
          <div key={id} className='container-brand-img '>
            <div className='image-size-padding' >
              <CiImageOn  className='no-img-icon'/>
            </div>
          </div>
        ))}
        </div>
        {/*  our testimonials show container box */}
         <div className='container-flex'>

         </div>
    </div>
  )
}
export default About