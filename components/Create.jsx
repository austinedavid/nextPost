"use client"
import React, {useState} from 'react'
import styles from "./create.module.css"

const Create = () => {
    const[heading, setheading] = useState("")
    const[bodies, setbodies] = useState("")

    // here we handle our form submission
    const handleSubmit = (event)=>{
        event.preventDefault()

        // get the whole value 
        const formvalues = {
            heading,
            bodies
        }
        // here we clear the input and set it to nothing here
        setbodies("");
        setheading("");
    }
  return (
    <div className={styles.container}>
        <form className={styles.formcon} onSubmit={handleSubmit}>
        <input value={heading} onChange={(e)=>setheading(e.target.value)} className={styles.headerInput} placeholder='headings...'/>
        <textarea value={bodies} onChange={(e)=>setbodies(e.target.value)} className={styles.mainInput} placeholder='enter text details...'/>
        <button className={styles.submit}>submit form</button>
        </form>
    </div>
  )
}

export default Create