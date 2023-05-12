import React from 'react'
import Link from 'next/link'
import styles from "./Nav.module.css"
import passport from "../utils/images/passport.png"
import Image from 'next/image'

const Nav = () => {
    const login = true
  return (
    <div className={styles.container}>
        <h4 className={styles.logo}><Link className={styles.logo} href="/">DavNext</Link></h4>
        <div>
            {
                login? <div className={styles.menu}><Link className={styles.post} href="/createpost">create post</Link><Image className={styles.image} src={passport} width="30" height="30"/></div>:
                <div className={styles.auth}><Link className={styles.login} href="login">Login</Link><Link className={styles.register} href="register">Register</Link></div>
            }
        </div>
    </div>
  )
}

export default Nav