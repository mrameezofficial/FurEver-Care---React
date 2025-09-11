import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [category, setCategory] = useState(null);
  const [name, setName] = useState("");
 const [userName,setUserName]= useState("DUMMY USER")

console.log("asdasdasda",name)
useEffect(()=>{
  // localStorage.setItem("name",name);
 let a= localStorage.getItem("name")
setUserName(a)
},[name,category])

  // useEffect(() => {
  //   const savedCategory = localStorage.getItem("category");
  //   const savedName = localStorage.getItem("name");
  //   if (savedCategory) setCategory(savedCategory);
  //   if (savedName) setName(savedName);
  // }, [category, name]);

  // useEffect(() => {
  //   if (category) localStorage.setItem("category", category);
  //   if (name) localStorage.setItem("name", name);
  // }, [category, name]);

  return (
    <AuthContext.Provider value={{ category, setCategory, name, setName,userName }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);