import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(null);
  const [userName, setUserName] = useState("");

// useEffect(()=>{
//   // localStorage.setItem("name",name);
//  let a= localStorage.getItem("name")
// setUserName(a)
// },[name,category])
useEffect(() => {
    const storedCategory = localStorage.getItem("category");
    const storedUserName = localStorage.getItem("userName");
    if (storedCategory) setCategory(storedCategory);
    if (storedUserName) setUserName(storedUserName);
  }, []);




  return (
    <AuthContext.Provider value={{ category, setCategory, userName, setUserName }}>
      {children}
    </AuthContext.Provider>
  );

};

export const useAuth = () => useContext(AuthContext);