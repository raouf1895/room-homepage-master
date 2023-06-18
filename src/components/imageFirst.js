import React from 'react'
import imageAbout from '../assets/image-about-dark.jpg'


export default function ImageFirst() {
  return (
    <div className='row-start-2 row-end-3 col-start-1 col-end-2 mobile:h-[30vh]'>
      <img src={imageAbout} alt='about'></img>
    </div>
  )
}
