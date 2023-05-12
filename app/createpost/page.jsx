import Create from '@/components/Create'
import React from 'react'
import styles from "./create.module.css"

const CreatePost = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.headers}>create your blog</h3>
      <Create/>
    </div>
  )
}

export default CreatePost