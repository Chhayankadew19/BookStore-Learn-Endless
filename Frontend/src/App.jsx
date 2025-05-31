import React from "react"
import Home from "./home/Home"
import Courses from "./courses/Courses"
import {Route,Routes} from "react-router-dom"
import Signup from "./components/Signup"
import Contacts from "./contacts/Contacts"
import Abouts from "./abouts/Abouts"
import { useAuth } from "./context/AuthProvider"
import { Toaster } from 'react-hot-toast';
     import { Navigate } from 'react-router-dom';

function App() { 
  const [authUser,setAuthUser]=useAuth()
      console.log(authUser);
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white">
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/course" element={authUser?<Courses/>:<Navigate to="/signup"/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/contact" element={<Contacts/>}></Route>
          <Route path="/about" element={<Abouts/>}></Route>

      </Routes>
      <Toaster />

     </div>
    </>
  )
}

export default App
