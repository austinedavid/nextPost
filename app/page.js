import Image from 'next/image'
import styles from './page.module.css'
import Post from '@/components/Post'

export default function Home() {
  
  return (
    <main className={styles.container}>
      <h3 className={styles.headings}>Universal club posts</h3>
      <Post/>
    </main>
  )
}
