"use client"
import React,{useState} from 'react'

const mode = () => {
    const [mode,setMode]=useState(false)
  function handleMode(){
    setMode(!mode)
    if(document.body.classList.contains('dark')){
    document.body.classList.remove('dark') 
    return
    }
    document.body.classList.add('dark') 
  }
  return (
    <div onClick={handleMode} className="h-8 w-16 relative bg-transparent border-2 rounded-2xl border-white  flex justify-center items-center">
    <span className="h-5 w-5 absolute transition duration-300 ease-in" style={{boxShadow:`${mode?"unset":"inset -3px -2px 5px -2px #ffffff, inset -10px -4px 0 0 #b5e3ff"}`,background:`${mode?'linear-gradient(40deg,#ff0080,#ff8c00 70%)':'transparent'}`,transform:`${mode?"translateX(-75%)":"translateX(75%)"}`,filter:`${mode?"invert(1)":"unset"}`,borderRadius:'50%'}}></span>
   </div>
  )
}

export default mode