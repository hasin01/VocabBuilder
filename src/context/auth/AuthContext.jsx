import React from "react";
import { AuthContext } from "./AuthContextDefinition.jsx";
import useAuthUser from "../../hooks/Auth.jsx";

const AuthProvider = ({ children }) => {
  const user = useAuthUser();
  
  return (
    <AuthContext.Provider value={user} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
