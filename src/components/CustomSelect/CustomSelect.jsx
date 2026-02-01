import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import Select, { components as Components } from "react-select";
import { useCategory } from "../../context/category/useCategorySet";

const options = [
  { value: "Verb", label: "Verb" },
  { value: "Participle", label: "Participle" },
  { value: "Noun", label: "Noun" },
  { value: "Adjective", label: "Adjective" },
  { value: "Pronoun", label: "Pronoun" },
  { value: "Numerals", label: "Numerals" },
  { value: "Adverb", label: "Adverb" },
  { value: "Preposition", label: "Preposition" },
  { value: "Conjunction", label: "Conjunction" },
  { value: "Phrasal verb", label: "Phrasal verb" },
  { value: "Functional phrase", label: "Functional phrase" },
];

const CustomDropdownIndicator = ({ color, ...props }) => {
  return (
    <Components.DropdownIndicator {...props}>
      <RiArrowDownSLine size={"30px"} style={{ color }} />
    </Components.DropdownIndicator>
  );
};
const CustomIndicatorSeparator = () => null;

const CustomSelect = ({ variant = "dark" }) => {
  const isDark = variant === "white";
  const { category, handleSetCategory } = useCategory();
  const selectedValue = options.find(option => option.value === category);

  return (
    <div>
      <Select
       value={selectedValue}
        isSearchable={false}
        components={{
          DropdownIndicator: (props) => (
            <CustomDropdownIndicator
              {...props}
              color={isDark ? "rgba(248, 248, 248, 1)" : "rgba(18,20,23,1)"}
            />
          ),
          IndicatorSeparator: CustomIndicatorSeparator,
        }}
        
        options={options}
        placeholder="Category"
        onChange={(e)=>handleSetCategory(e.value)}
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
            boxShadow: "none",
          }),
          menu: (baseStyles) => ({
            ...baseStyles,
            fontFamily: "MacPawPixelDisplay",
          }),
          option: (baseStyles, state) => ({
            ...baseStyles,
            backgroundColor: "white",
            color:
              state.isSelected || state.isFocused
                ? "rgba(133, 170, 159, 1)"
                : "black",
            cursor: "pointer",
            ":active": {
              backgroundColor: "white",
            },
          }),
                   singleValue: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "transparent",
       color: isDark ? "white" : "black"
          }),
          
        }}
      />
    </div>
  );
};

export default CustomSelect;
