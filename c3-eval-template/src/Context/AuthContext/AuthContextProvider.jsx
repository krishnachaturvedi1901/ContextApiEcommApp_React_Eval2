import React from "react";

// 1. create auth context and auth context provider for the entire application to have auth related data;

// 2. maintain loading,error, auth status and token in the state;

// 3. you can provide all loading, error, auth status, token data, function which updates state in here; which can be consumed anywhere in your application.
export const AuthContext =React.createContext()

const AuthContextProvider = ({children}) => {
  const [isAuth,setIsAuth]=React.useState(false)
  const toggleAuth=()=>{
    setIsAuth(!isAuth)
  }
  return (
  <AuthContext.Provider value={{isAuth,toggleAuth}}>
    {children}
  </AuthContext.Provider>
  )
};

export default AuthContextProvider;
