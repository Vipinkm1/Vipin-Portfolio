import React, { useEffect, useState } from 'react'
import Vedio from '../../../assets/video.png'
import Html from '../../../assets/html.png';
import Css from '../../../assets/css.png';
import JavaScript from '../../../assets/JavaScript.png';
import ReactLogo from '../../../assets/reactlogo.png';
import Redux from '../../../assets/reduxtoolkit.png';
import Firebase from '../../../assets/firebase.png';
import Node from '../../../assets/nodejs.png'
import MongoDb from '../../../assets/mongodb.png'
import Express from '../../../assets/express-js.png'
const About = () => {
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
        if (count === target) {
          clearInterval(interval)
        }
      }, 30)
    }
    //  show value here
    animatedCount(setYearsExperience, 1)
    animatedCount(setProjectCompletion, 6)
    animatedCount(setHappyClient, 10)
    return () => {
      clearInterval(animatedCount)
    }
  }, [])
  const BrandShow = [
    { id: 1, expertiesImage: Html, expertiesTitle: 'Html' },
    { id: 2, expertiesImage: Css, expertiesTitle: 'Css' },
    { id: 3, expertiesImage: JavaScript, expertiesTitle: 'JavaScript' },
    { id: 4, expertiesImage: ReactLogo, expertiesTitle: 'React' },
    { id: 5, expertiesImage: Redux, expertiesTitle: 'Redux Toolkit' },
    { id: 6, expertiesImage: Firebase, expertiesTitle: 'Firebase' },
    { id: 7, expertiesImage: Node, expertiesTitle: 'Node.Js' },
    { id: 7, expertiesImage: MongoDb, expertiesTitle: 'MongoDB' },
    { id: 7, expertiesImage: Express, expertiesTitle: 'Express.Js' }
  ]
  return (
    <div className='about-border'>
      <div className='about-flex-item'>
        <div>
        {/*  add  the code value to show document and the product  */}
          <p className='name-intro'><span className='black-quote'>Hi, This Is</span> Vipin Kumar 👋</p>
        </div>
        <div className='available-flex'>
          <p className='name-intro available-font'>I'm Available</p>
          <img className='vedio-size' src={Vedio} />
        </div>
      </div>
      {/* Show some quote here  */}
      <div className='quote-text'>
        <p className='name-intro'>A Passionate <span className='black-quote'>Full Stack Developer </span>🖥️ & <span className='black-quote'>Frontend Developer</span> having <span>7 month</span> of Experiences .</p>
      </div>
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
        <p className='name-intro brand-title'>Technology Which I Have ✨ Knowledge</p>
      </div>
      {/*  show the brand image list here */}
      <div className='brand-img'>
        {BrandShow.map((brandItem, id) => (
          <div key={id} className='container-brand-img '>
            <div className='image-size-padding' >
              <img src={brandItem.expertiesImage} className='no-img-icon' />
              <p>{brandItem.expertiesTitle}</p>
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