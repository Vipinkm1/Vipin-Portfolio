import React from 'react'
import { useState } from 'react'
import Live from '../../../assets/video.png'
import UX from '../../../assets/uxdesigner.png'
import Fronted from '../../../assets/FrontedDesign.png'
import Cms from '../../../assets/cms.png'
import Website from '../../../assets/websiteMaintanence.png'
import Developer from '../../../assets/developer.png'

const Services = () => {
  const [openBoxFirst, setOpenBoxFirst] = useState(false)
  const [openBoxSecond, setOpenBoxSecond] = useState(false)
  const [openBoxThird, setOpenBoxThird] = useState(false)
  const [openBoxFourth, setOpenBoxFourth] = useState(false)
  //  imported value added the main condition value
  const services = [
    { id: 1, serviceImage: UX, serviceTitle: 'UX/UI Designer' },
    { id: 2, serviceImage: Fronted, serviceTitle: 'Frontend Design' },
    { id: 3, serviceImage: Cms, serviceTitle: 'CMS Website' },
    { id: 4, serviceImage: Developer, serviceTitle: 'Website Developer' },
    { id: 5, serviceImage: Website, serviceTitle: "Website Maintenence" },

  ]
  

  
  return (
    <div className='about-border service-scroll'>
      <div className='about-flex-item'>
        <div>
          <p className='name-intro'> <span className='black-quote'>Services</span> I Offered</p>
        </div>
        <div className='available-flex'>
          <p className='name-intro available-font'>I'm Available</p>
          <img className='vedio-size' src={Live} />
        </div>th
      </div>
      <div className='quote-text'>
        <p className='name-intro text-color'>Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert <span className='black-quote'>Frontend Design and Development Services!</span> </p>
      </div>
      <div className='brand-img'>
        {services.map((serviceItem, id) => (
          <div key={id} className='container-brand-img '>
            <div className='image-size-padding' >
              <img src={serviceItem.serviceImage} className='no-img-icon' />
              <p>{serviceItem.serviceTitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='question-container'>
        <p className='name-intro question-color'>Frequently Asked Questions</p>
      </div>
      <div className='container-1'>
      {/*  check the open box are  in the component and it will be shown or not */}
        <div className='question-heading'>
          <p className='frequently-question-title'>What does fronted developer do?</p>
          <p className='plus-icon' onClick={() => setOpenBoxFirst(!openBoxFirst)}>{openBoxFirst ? '-' : '+'}</p>
        </div>
        {/*  open the first box */}
        {openBoxFirst && (
          <div className='answer-border'>
            <p className='frequntly-answer'>Frontend developers create the part of websites and web applications that users see and interact with.</p>
          </div>
        )}
      </div>
      <div className='container-1'>
        <div className='question-heading'>
          <p className='frequently-question-title'>What does ux/ui designer do?</p>
          <p className='plus-icon' onClick={() => setOpenBoxSecond(!openBoxSecond)}>{openBoxSecond ? '-' : '+'}</p>
        </div>
        {openBoxSecond && (
          <div className='answer-border'>
            <p className='frequntly-answer'>UX/UI designers, or user experience/user interface designers, are responsible for making products and services easy and enjoyable to use.</p>
          </div>
        )}
      </div>
      <div className='container-1'>
        <div className='question-heading'>
          <p className='frequently-question-title'>What does do web developer?</p>
          <p className='plus-icon' onClick={() => setOpenBoxThird(!openBoxThird)}>{openBoxThird ? '-' : '+'}</p>
        </div>
        {openBoxThird && (
          <div className='answer-border'>
            <p className='frequntly-answer'> Web developers create functional, user-friendly websites and web applications. They may write code, develop and test new applications, or monitor site performance and traffic. Front-end developers focus on the user-facing side of their work, while back-end developers make websites functional and secure.
            </p>
          </div>
        )}
      </div>
      <div className='container-1'>
        <div className='question-heading'>
          <p className='frequently-question-title'>How developer maintain the cms website?</p>
          <p className='plus-icon' onClick={() => setOpenBoxFourth(!openBoxFourth)}>{openBoxFourth ? '-' : '+'}</p>
        </div>
        {openBoxFourth && (
          <div className='answer-border'>
            <p className='frequntly-answer'> A CMS, short for content management system, is a software application that allows users to build and manage a website without having to code it from scratch, or know how to code at all. With a CMS, you can create, manage, modify, and publish content in a user-friendly interface</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default Services