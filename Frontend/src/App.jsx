import React from "react"
import Home from "./home/Home"
import Courses from "./courses/Courses"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Signup from "./components/Signup"
import Contacts from "./contacts/Contacts"
import Abouts from "./abouts/Abouts"


function App() { 
  return (
    <>
     <div className="dark:bg-slate-900 dark:text-white">
       <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/course" element={<Courses/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/contact" element={<Contacts/>}></Route>
          <Route path="/about" element={<Abouts/>}></Route>

      



      </Routes>
     </div>
    </>
  )
}

export default App
