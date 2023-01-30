import React from 'react'
import styles from "./MainPage.module.css";
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function MainPage() {
    return (
        <>
            <Header />
            <div className={styles.first_block}>
                <div><img src="/images/big_logo.png" alt='logo'/></div>
                <div><p>Experience the perfect combination of modern <br />housing & natural scenery.</p></div>
                <div><p>Located in Lofoten, Norway</p></div>
            </div>
            <div className={styles.about_block}>
                <div className={styles.orange_line}></div>
                <div className={styles.about_text}>
                    <div><p>The Guest House is the perfect weekend get-away housing. Located in the Norwegian archipelago, Lofoten, it's a great escape from the hustle and bustle of the city. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p></div>
                    <div>
                        <div><p>Below you'll find information about the accommodation and what's included in the price. Don't hesitate to reach out to us vi the contact page if you have any questions around your stay.</p></div>
                        <button className={styles.book_btn}>Book now</button>
                    </div>
                </div>
            </div>
            <div className={styles.text_block}>
                <div className={styles.orange_line}></div>
                <div className={styles.bold_text}><p>The Guest House is the perfect weekend <br/>getaway cabin.</p></div>
            </div>
            <div className={styles.kitchen_img}></div>
            <div className={styles.sleepingArrangements_block}>
                <div className={styles.orange_line}></div>
                <div className={styles.sleepingArrangements_header}><p>Sleeping arrangements.</p></div>
                <div className={styles.sleepingArrangements_text}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam<br/> scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis<br/> consectetur.</p></div>
                <div className={styles.arrangements}>
                    <div className={styles.sleepingArrangements_about}>
                        <div className={styles.bed_logo}></div>
                        <div><p>Beds<br/>The cabin is equipped with 12 beds, 4 of which<br/> are in bunk. The rent includes linens<br/> for all beds.</p></div>
                    </div>
                    <div className={styles.sleepingArrangements_about}>
                        <div className={styles.door_logo}></div>
                        <div><p>Bedrooms<br/>Spread out over two floors, the cabin offers 4<br/> bedrooms. Ranging from<br/> 2 to 4 beds per room.</p></div>
                    </div>
                    <div className={styles.sleepingArrangements_about}>
                        <div className={styles.shower_logo}></div>
                        <div><p>Bathrooms<br/>The cabin has three bathrooms, all equipped<br/> with showers and one<br/> with a bath tub.</p></div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
