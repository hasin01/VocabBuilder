import React, { createContext } from "react";
import useAuthUser from "../hooks/Auth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const user = useAuthUser();
  
  return (
    <AuthContext.Provider value={user} >
      {children}
    </AuthContext.Provider>
  );
};
