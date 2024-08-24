import React from 'react'
import { useState } from 'react'
import Live from '../../../assets/video.png'

const Services = () => {
  const [openBoxFirst, setOpenBoxFirst] = useState(false)
  const [openBoxSecond, setOpenBoxSecond] = useState(false)
  const [openBoxThird, setOpenBoxThird] = useState(false)
  const [openBoxFourth, setOpenBoxFourth] = useState(false)
  const [openBoxFivth, setOpenBoxFivth] = useState(false)

  //  imported value added the main condition value
  const services = [
    { id: 1, serviceImage: '' },
    { id: 2, serviceImage: '' },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 }
  ]
  //  conditiopen plus and - button will be render here 
  return (
    <div className='about-border service-scroll'>
      <div className='about-flex-item'>
        <div>
          <p className='name-intro'> <span className='black-quote'>Services</span> I Offered</p>
        </div>
        <div className='available-flex'>
          <p className='name-intro available-font'>I'm Available</p>
          <img className='vedio-size' src={Live} />
        </div>
      </div>
      <div className='quote-text'>
        <p className='name-intro text-color'>Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert <span className='black-quote'>Product Design and Development Services!</span> </p>
      </div>
      <div className='brand-img'>
        {services.map((servicesItem, id) => (
          <div key={id} className='services-item'>
          </div>
        ))}
      </div>
      <div className='question-container'>
        <p className='name-intro question-color'>Frequently Asked Questions</p>
      </div>
      <div className='container-1'>
        <div className='question-heading'>
          <p>Question-1</p>
          <p className='plus-icon' onClick={() => setOpenBoxFirst(!openBoxFirst)}>{openBoxFirst ? '-' : '+'}</p>
        </div>
        {openBoxFirst && (
          <div className='answer-border'>
            <p>Hello answer</p>
          </div>
        )}
      </div>
      <div className='container-1'>
        <div className='question-heading'>
          <p>Question-1</p>
          <p className='plus-icon' onClick={() => setOpenBoxSecond(!openBoxSecond)}>{openBoxSecond ? '-' : '+'}</p>
        </div>
        {openBoxSecond && (
          <div className='answer-border'>
            <p> Hello answer</p>
          </div>
        )}
      </div>
      <div className='container-1'>
        <div className='question-heading'>
          <p>Question-1</p>
          <p className='plus-icon' onClick={() => setOpenBoxThird(!openBoxThird)}>{openBoxThird ? '-' : '+'}</p>
        </div>
        {openBoxThird && (
          <div className='answer-border'>
            <p> Hello answer</p>
          </div>
        )}
      </div>
      <div className='container-1'>
        <div className='question-heading'>
          <p>Question-1</p>
          <p className='plus-icon' onClick={() => setOpenBoxFourth(!openBoxFourth)}>{openBoxFourth ? '-' : '+'}</p>
        </div>
        {openBoxFourth && (
          <div className='answer-border'>
            <p> Hello answer</p>
          </div>
        )}
      </div>
      <div className='container-1'>
        <div className='question-heading'>
          <p>Question-1</p>
          <p className='plus-icon' onClick={() => setOpenBoxFivth(!openBoxFivth)}>{openBoxFivth ? '-' : '+'}</p>
        </div>
        {openBoxFivth && (
          <div className='answer-border'>
            <p> Hello answer</p>
          </div>
        )}
      </div>
    {/* any new componets add here start  */}

    </div>
  )
}
export default Services