import React from 'react'

export const Button = (props) => {
  



  return (
    <button className='flex rounded-3xl bg-buttonColor font-macpaw font-bold text-base text-white py-4 w-full justify-center hover:bg-buttonHoverColor focus:bg-buttonHoverColor  ' > 
    {props.text}
    </button>
  )
}
