import React from 'react'
import Desktop from '../../img/desktop-Word.png'
import Mobile from '../../img/mobile-Word.png'
import Tablet from '../../img/tablet-Word.png'
import { Button } from '../Button/Button'

const AddWordPreview = () => {
  return (
    <div>
    <img className='mx-auto mb-8 '
      src={Desktop}
      srcSet={`${Mobile} 640w, ${Tablet} 1024w, ${Desktop} 1920w`}
      sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1920px"
      alt="Адаптивная иллюстрация"
    />
    <h1 className=' font-medium font-macpaw text-base mb-4'>You don't have a single word to learn right now. </h1>
    <p className=' font-normal font-macpaw text-sm mb-38'>Please create or add a word to start the workout. We want to improve your vocabulary and develop your knowledge, so please share the words you are interested in adding to your study.</p>
      
      <div className=" mt-2 ">
        <Button text="Add word" />
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="m-4 font-macpaw text-base font-bold underline text-greyText hover:text-black focus:text-black"
        >
          Cancel
        </button>
      </div>
      
    </div>
  )
}

export default AddWordPreview