import React, { useState } from 'react'
import Modal from 'react-modal';
import ukrain from "../../img/ukraine.svg"
import united from "../../img/united.svg"

const AddWordForm = () => {


  return (
<div className='flex flex-col gap-5'>
<div className='flex items-center gap-2 text-white font-medium text-sm leading-4 text-lef'>
  <img src={ukrain} alt="united" className="w-7 h-7" />
Ukrainian</div>
<input type='text' placeholder='Трохи, трішки' className=' py-1.5 pl-4 border border-white rounded-xl placeholder: font-medium text-base text-white'></input>
<div className='flex items-center gap-2 text-white font-medium text-sm leading-4 text-lef' >
  <img src={united} alt="united" className="w-7 h-7" />
English</div>
<input type='text' placeholder='A little bit' className=' py-1.5 pl-4 border border-white rounded-xl placeholder: font-medium text-base text-white'></input>
<div className='flex justify-between gap-2'>
    <button className=' w-full py-3 bg-white rounded-4xl font-[MacPawPixelDisplay] font-bold text-base leading-6 '>Save</button>
    <button className=' w-full py-3 rounded-4xl border  border-white rounded-4xl text-white text-white font-[MacPawPixelDisplay] font-bold text-base leading-6'>Cancel</button>

</div>

</div>

  )
}

export default AddWordForm