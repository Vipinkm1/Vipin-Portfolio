import React from 'react'

const Blog = () => { 
  //  blog post container show 
  return (
    <div className='about-border add-scroll-bar'>
     <div className='new-text-padding'>
        <p className='project-font-size'>My Recent Article and Publications</p>
      </div>
      <div className='new-text-padding project-quote'>
        <p className='project-font-size quote-size'>I'm here to help if you're searching for a product designer to bring your idea to life or a design partner to help take your business to the next level.</p>
      </div>
      <div className='project-container-border-flex'>
        <div className='project-border'>1</div>
        <div className='project-border'>2</div>
      </div>
      <div className='project-container-border-flex'>
        <div className='project-border'>1</div>
        <div className='project-border'>2</div>
      </div>
      <div className='project-container-border-flex'>
        <div className='project-border'>1</div>
        <div className='project-border'>2</div>
      </div>
    </div>
  )
}

export default Blog