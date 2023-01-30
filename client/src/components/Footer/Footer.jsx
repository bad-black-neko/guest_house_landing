import React from 'react'
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.info_block}>
        <ul className={styles.navigation}>Pages
          <li><a>Start</a></li>
          <li><a>Contact</a></li>
          <li><a>Our history</a></li>
          <li><a>Licenses</a></li>
          <li><a>Instructions</a></li>
          <li><a>Style guide</a></li>
        </ul>
        <div className={styles.media}>
          <p>SOCIAL MEDIA</p>
          <div className={styles.media_icons}>
            <a href='/'><img src="/images/Facebook-Icon.png" alt='facedook'></img></a>
            <a href='/'><img src="/images/Instagram-Icon.png" alt='instagram'></img></a>
            <a href='/'><img src="/images/Airbnb-Icon.png" alt='airbnb'></img></a>
          </div>
        </div>
        <div className={styles.subscription_block}>
          <p>NEWSLETTER</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius<br /> enim in eros elementum tristique.</p>
          <div className={styles.subscribe_input}>
            <input className={styles.email_input} type='text' placeholder='Email' value="" />
            <button className={styles.submit_btn}>Submit</button>
          </div>
        </div>
      </div>
      <div className={styles.logo_block}>
        <a href='/'><img className={styles.logo} src="/images/logo.png" alt='logo' /></a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  )
}
