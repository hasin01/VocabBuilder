import React from "react";
import { CategoryContext } from "./CategoryContextDefinition.jsx";
import useCategorySet from "../../hooks/useCategorySet.js";

const CategoryProvider = ({ children }) => {
  const category = useCategorySet();
  return (
    <CategoryContext.Provider value={category} >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
