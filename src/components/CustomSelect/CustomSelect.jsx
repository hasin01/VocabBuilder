import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import Select, { components } from 'react-select'


const options = [
  { value: 'Verb', label: 'Verb' },
{ value: 'Participle', label: 'Participle' },
{ value: 'Noun', label: 'Noun' },
{ value: 'Adjective', label: 'Adjective' },
{ value: 'Pronoun', label: 'Pronoun' },
{ value: 'Numerals', label: 'Numerals' },
{ value: 'Adverb', label: 'Adverb' },
{ value: 'Preposition', label: 'Preposition' },
{ value: 'Conjuction', label: 'Conjuction' },
{ value: 'Phrasal verb', label: 'Phrasal verb' },
{ value: 'Functional phrase', label: 'Functional phrase' },

]

const CustomDropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <RiArrowDownSLine size={"30px"} style={{ color: "rgba(18,20,23,1)",}} />
    </components.DropdownIndicator>
  )
}
const CustomIndicatorSeparator = () => null

const CustomSelect = () => {


  return (
    <div>

 
 <Select   components={{
          DropdownIndicator: CustomDropdownIndicator,
          IndicatorSeparator: CustomIndicatorSeparator, 
        }}
 options={options} placeholder="Categories" styles={{
     dropdownIndicator: (base) => ({
      ...base,
      padding: 0, 
    }),

placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: "black",
    fontFamily: "MacPawPixelDisplay",
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0",
    textAlign: "left",
  })
,
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: "rgba(18, 20, 23, 0.1)",
      borderRadius:"15px",
      paddingLeft:"20px",
      paddingRight:"10px",
      paddingTop:"8px",
      paddingBottom:"8px",

    })}}
    
     />

    </div>
  )
}

export default CustomSelect