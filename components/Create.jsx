"use client"
import React from 'react'
import styles from "./create.module.css"

const Create = () => {
    const handleSubmit = (event)=>{
        event.preventDefault()
        alert("it is submitted")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input placeholder='headings...'/>
        <textarea placeholder='enter text details...'/>
        <button>submit form</button>
        </form>
    </div>
  )
}

export default Create