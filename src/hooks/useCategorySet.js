import React, { useState } from 'react'


const useCategorySet = ()=>{
  
    const [category, setCategory] = useState();


    const handleSetCategory =(cat)=>{

    setCategory(cat)

    }

return {handleSetCategory,category}







}



export default useCategorySet