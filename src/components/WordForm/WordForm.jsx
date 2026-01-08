import React from 'react'
import CustomSelect from '../CustomSelect/CustomSelect'
import InputForm from '../InputForm/InputForm'
import SimpleTable from '../Table/Table'

const WordForm = () => {

    
  return (
    <div className='flex flex-col gap-1.5'>
    <InputForm />
        <CustomSelect/>
        <SimpleTable/>
    </div>
  )
}

export default WordForm