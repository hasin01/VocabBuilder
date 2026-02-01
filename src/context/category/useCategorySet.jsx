import { useContext } from "react";
import { CategoryContext } from "./CategoryContextDefinition.jsx";

export const useCategory = () => useContext(CategoryContext);