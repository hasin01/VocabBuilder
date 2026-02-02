import React from 'react'

const InputTraining = (props) => {
  
  return (
    <>
      <textarea 
        value={props.value || ""}
        onChange={e => {
          props.ukChange && props.ukChange(e.target.value);
        }}
        placeholder={props.placeholder} 
        readOnly={props.readOnly}
        className="w-full h-48 bg-white placeholder: font-fixel text-base font-medium leading-6 tracking-normal border border-white rounded-lg p-3 resize-none focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
      />
    </>
  )
}

export default InputTraining