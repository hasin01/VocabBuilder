import AuthProvider from "./auth/AuthContext";
import CategoryProvider from "./category/CategoryContext";


export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <CategoryProvider>
        {children}
      </CategoryProvider>
    </AuthProvider>
  );
};