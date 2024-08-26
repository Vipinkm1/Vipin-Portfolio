import React from 'react'

const Contact = () => {
  return (
    <div className='about-border'>
      <div className='new-text-padding'>
        <p className='project-font-size'>Let's 👋 Work Together</p>
      </div>
      <div className='new-text-padding project-quote'>
        <p className='project-font-size quote-size'>I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
      </div>
      <div className='form-border'>
        {/* add the form input field here */}
        <form >
          <div className='form-item-design'>
          <div className='form-item'>
          <div className='input-name'>Name</div>
          <input className='input-width' type='text' placeholder='Enter name'/>
          </div>
          <div className='form-item'>
          <div className='input-name'>Email</div>
          <input className='input-width' type='text' placeholder='Enter email'/>
          </div>
           <div className='form-item'>
          <div className='input-name'>Subject</div>
          <input className='input-width' type='text' placeholder='Enter what do u want'/>
          </div>
          <div className='from-item'>
            <div className='input-name'>Budget</div>
            <select className='input-width'>
              <option>$10</option>
              <option>$100</option>
              <option>$200</option>
              <option>$50</option>
            </select>
          </div>
          <div className='form-item'>
            <div className='input-name'>Comment</div>
            <input className='input-full-width' type='text' placeholder='Enter message'/>
          </div>
          </div>
          <div className='submit-btn-container'>
            <button className='button-width'>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Contact