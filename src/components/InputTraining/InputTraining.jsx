import React from 'react'

const InputTraining = (props) => {
  return (
    <>
<textarea 
  placeholder={props.placeholder} 
  className="w-full h-48 bg-white placeholder: font-fixel text-base font-medium leading-6 tracking-normal border border-white rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
>
</textarea>
        
    </>
  )
}

export default InputTraining