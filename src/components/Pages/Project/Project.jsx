import React from 'react'
import Img1 from '../../../assets/Ecommerce.png'
import { IoIosArrowRoundForward } from "react-icons/io";
const Project = () => {
  const projectList = [
    { id: 1, ProductImg: '', ProjectTitle: '', technoloy: '' },
    { id: 2, ProductImg: '', ProjectTitle: '', technoloy: '' },
    { id: 3, ProductImg: '', ProjectTitle: '', technoloy: '' },
    { id: 4, ProductImg: '', ProjectTitle: '', technoloy: '' },
    { id: 5, ProductImg: '', ProjectTitle: '', technoloy: '' }
  ]
  
  return (
    <div className='about-border add-scroll-bar'>
      <div className='new-text-padding'>
        <p className='project-font-size'>Check Out My Latest <span className='new-project-color'>Projects</span></p>
      </div>
      <div className='new-text-padding project-quote'>
        <p className='project-font-size quote-size'>I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
      </div>
      <div className='project-container'>
        <div className='img-container'>
          <img className='project-img-size' src={Img1} />
        </div>
      </div>
      <div className='project-detail question-heading'>
        <p className=' project-title name-intro '>Ecommerce Web app</p>
        <div className='site-flex'>
          <p className='project-link'>Visite Site</p>
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className='technology-border'></div>
      <div className='project-container'>
        <div className='img-container'>
          <img className='project-img-size' src={Img1} />
        </div>
      </div>
      <div className='project-detail question-heading'>
        <p className=' project-title name-intro '>Ecommerce Web app</p>
        <div className='site-flex'>
          <p className='project-link'>Visite Site</p>
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className='technology-border'></div>
    </div>
  )
}
export default Project