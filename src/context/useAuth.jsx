import { useContext } from "react";
import { AuthContext } from "./AuthContextDefinition.jsx";

export const useAuth = () => useContext(AuthContext);