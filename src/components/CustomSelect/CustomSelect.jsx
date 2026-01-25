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

const CustomDropdownIndicator = ({ color, ...props }) => {
  return (
    <components.DropdownIndicator {...props}>
      <RiArrowDownSLine size={"30px"} style={{ color }} />
    </components.DropdownIndicator>
  )
}
const CustomIndicatorSeparator = () => null

const CustomSelect = ({ variant = "dark" ,handleSelect}) => {
  const isDark = variant === "white"
  return (
    <div>
      <Select
        components={{
          DropdownIndicator: (props) => (
            <CustomDropdownIndicator {...props} color={isDark ? "rgba(248, 248, 248, 1)" : "rgba(18,20,23,1)"} />
          ),
          IndicatorSeparator: CustomIndicatorSeparator,
        }}
        options={options}
   
        placeholder="Categories"

           onChange={handleSelect} 
        styles={{
          dropdownIndicator: (base) => ({
            ...base,
            padding: 0,
          }),
          placeholder: (defaultStyles) => ({
            ...defaultStyles,
            color: isDark ? "white" : "black",
            fontFamily: "MacPawPixelDisplay",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0",
            textAlign: "left",
          }),
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: isDark ? "white" : "rgba(18, 20, 23, 0.1)",
            borderRadius: "15px",
            paddingLeft: "20px",
            paddingRight: "10px",
            paddingTop: isDark ? "6px" : "8px",
            paddingBottom: isDark ? "6px" : "8px",
            backgroundColor: isDark ? "transparent" : "rgba(248, 248, 248, 1)",
          }),
        }}
      />
    </div>
  )
}

export default CustomSelect
 

