import React from 'react'
import Live  from '../../../assets/video.png'

const Services = () => {
  const services = [
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
        <p className='name-intro'> <span className='black-quote'>Services</span> I Offered</p>
      </div>
      <div className='available-flex'>
        <p  className='name-intro available-font'>I'm Available</p>
        <img className='vedio-size' src={Live}/>
      </div>
     </div>
     <div className='quote-text'>
      <p className='name-intro text-color'>Transforming Ideas into Innovative Reality, Elevate Your Vision with Our Expert <span className='black-quote'>Product Design and Development Services!</span> </p>
     </div>
     <div className='brand-img'>
     {services.map((servicesItem, id) => {
      <div key={id} className='services-item'>
      </div>
     })}
     </div>
     <div className=''></div>
    </div>
  )
}

export default Services