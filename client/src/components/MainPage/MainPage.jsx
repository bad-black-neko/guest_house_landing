import React from 'react'
import styles from "./MainPage.module.css";
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function MainPage() {
  return (
    <>
        <Header/>
        <div className={styles.first_block}>
            <div><img src="/images/big_logo.png" alt='logo'/></div>
            <div>Experience the perfect combination of modern <br/>housing & natural scenery.</div>
            <div>Located in Lofoten, Norway</div>
        </div>
        <Footer/>
    </>
  )
}
