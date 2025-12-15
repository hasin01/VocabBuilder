import React from 'react'
import Desktop from '../../img/desktop-illustration.png'
import Mobile from '../../img/mobile-illustration.png'
import Tablet from '../../img/tablet-illustration.png'




export const Banner = () => {

  return (
    <div>
<img className='mx-auto '
  src={Desktop}
  srcSet={`${Mobile} 640w, ${Tablet} 1024w, ${Desktop} 1920w`}
  sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
  alt="Адаптивная иллюстрация"
/>


    </div>
  )
}
