import React from 'react'
import CV from  '../../assets/fake-cv.pdf'

const CTA = () => {
  return (
    <div className='cta'> 
    <a href={CV} download className='btn btn-secondary'> Download CV</a>
    <a href="#contact" className='btn btn-primary'>Lets Connect</a>
    </div>
  )
}

export default CTA