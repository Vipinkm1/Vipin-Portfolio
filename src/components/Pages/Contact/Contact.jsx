import React, { useState } from 'react';
const Contact = () => {
  //  track the value of the user whose put in the input element
  const [formSubmit, setfFormSubmit] = useState({
    name: '',
    email: '',
    subject: '',
    budget: '',
    comment: '',
  })
  //  track the field name value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setfFormSubmit(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  // notification message
  const handleSubmit = (e) => {
    e.preventDefault()
    setfFormSubmit(formSubmit)

    alert('Form Successfully Submitted')
    console.log(formSubmit)
    console.log('Form is submit')
    //  when the data is submit successfully then input field is disappeared
    setfFormSubmit({
      name: '',
      email: '',
      subject: '',
      budget: '',
      comment: ''
    })
  }
  return (
    <div className='about-border'>
      <div className='new-text-padding'>
        <p className='project-font-size'>Let's 👋 Work Together</p>
      </div>
      <div className='new-text-padding project-quote'>
        <p className='project-font-size quote-size'>I'm here to help if you're searching for a Frontend developer to bring your idea to life or a design and develope partner to help take your business to the next level.</p>
      </div>
      {/*  add the main component value  to show the start showing  the input field value  and show the 
      
       */}
      <div className='form-border'>
        {/* add the form input field here */}
        <form onSubmit={handleSubmit} >
          <div className='form-item-design'>
            <div className='form-item'>
              <div className='input-name'>Name</div>
              <input name='name' className='input-width' type='text' placeholder='Enter name' value={formSubmit.name} onChange={handleChange} />
            </div>
            <div className='form-item'>
              <div className='input-name'>Email</div>
              <input className='input-width' type='text' placeholder='Enter email' name='email' value={formSubmit.email} onChange={handleChange} />
            </div>
            <div className='form-item'>
              <div className='input-name'>Subject</div>
              <input className='input-width' type='text' placeholder='Enter what do u want' name='subject' value={formSubmit.subject} onChange={handleChange} />
            </div>
            <div className='from-item'>
              <div className='input-name'>Budget</div>
              <select className='input-width' name='budget' onChange={handleChange} value={formSubmit.budget}>
                <option>$10</option>
                <option>$100</option>
                <option>$200</option>
                <option>$50</option>
              </select>
            </div>
            <div className='form-item'>
              <div className='input-name'>Comment</div>
              <input className='input-full-width' type='text' placeholder='Enter message' name='comment' value={formSubmit.comments} onChange={handleChange} />
            </div>
          </div>
          <div className='submit-btn-container'>
            <button type='submit' className='button-width'>Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Contact