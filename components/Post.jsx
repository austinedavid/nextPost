"use client"
import React from 'react'
import styles from "./post.module.css"

const Post = () => {
    const creatorName = "David Augustine"
    const datedCreated = "23:78"
  return (
    <div className={styles.container}>
        <div>
            <h3 className={styles.heading}>The best of Ronaldo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique odit dolores quo porro incidunt unde itaque voluptatum facilis consequatur maxime quaerat dolorum veniam ea, deleniti accusantium? Pariatur sed tenetur odit sequi magnam accusamus laboriosam illum hic dicta quibusdam aperiam nihil, quod, velit amet perferendis expedita, harum quos. Iure, ullam?</p>
            <div><p className={styles.creator}>created by {creatorName}</p> <p>created on {datedCreated}</p></div>
            <button className={styles.edit}>Edit post</button>
            <button className={styles.delete}>delete post</button>
        </div>
        <div>
            <h3 className={styles.heading}>The best of Ronaldo</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas similique odit dolores quo porro incidunt unde itaque voluptatum facilis consequatur maxime quaerat dolorum veniam ea, deleniti accusantium? Pariatur sed tenetur odit sequi magnam accusamus laboriosam illum hic dicta quibusdam aperiam nihil, quod, velit amet perferendis expedita, harum quos. Iure, ullam?</p>
            <div><p className={styles.creator}>created by {creatorName}</p> <p>created on {datedCreated}</p></div>
            <button className={styles.edit}>Edit post</button>
            <button className={styles.delete}>delete post</button>
        </div>
    </div>
  )
}

export default Post