import React from 'react'
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
        <ul className={styles.menu}>
            <li><a className={styles.logo} href='/'><img src="/images/logo.png" alt='logo'/></a></li>
            <li><a href='/'>Start</a></li>
            <li><a href='/'>Contact</a></li>
            <li><a href='/'>Our history</a></li>
            <li><button className={styles.btn}>Book now</button></li>
        </ul>
    </div>
  )
}
