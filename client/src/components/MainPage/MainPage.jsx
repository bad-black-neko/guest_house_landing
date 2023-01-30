import React from 'react'
import styles from "./MainPage.module.css";
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function MainPage() {
    return (
        <>
            <Header />
            <div className={styles.first_block}>
                <div><img src="/images/big_logo.png" alt='logo' /></div>
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
                <div className={styles.bold_text}><p>The Guest House is the perfect weekend <br />getaway cabin.</p></div>
            </div>
            <div className={styles.kitchen_img}></div>
            <div className={styles.sleepingArrangements_block}>
                <div className={styles.orange_line}></div>
                <div className={styles.sleepingArrangements_header}><p>Sleeping arrangements.</p></div>
                <div className={styles.sleepingArrangements_text}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam<br /> scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis<br /> consectetur.</p></div>
                <div className={styles.arrangements}>
                    <div className={styles.sleepingArrangements_about}>
                        <div className={styles.bed_logo}></div>
                        <div><p>Beds<br />The cabin is equipped with 12 beds, 4 of which<br /> are in bunk. The rent includes linens<br /> for all beds.</p></div>
                    </div>
                    <div className={styles.sleepingArrangements_about}>
                        <div className={styles.door_logo}></div>
                        <div><p>Bedrooms<br />Spread out over two floors, the cabin offers 4<br /> bedrooms. Ranging from<br /> 2 to 4 beds per room.</p></div>
                    </div>
                    <div className={styles.sleepingArrangements_about}>
                        <div className={styles.shower_logo}></div>
                        <div><p>Bathrooms<br />The cabin has three bathrooms, all equipped<br /> with showers and one<br /> with a bath tub.</p></div>
                    </div>
                </div>
            </div>
            <div className={styles.benefits_block}>
                <div className={styles.orange_line}></div>
                <div className={styles.benefits_header}><p>The perfect escape.</p></div>
                <div className={styles.benefits_text}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam<br /> scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis<br /> consectetur.</p></div>
                <div className={styles.benefits}>
                    <div className={styles.benefits_about}>
                        <div className={styles.benefit_info}>
                            <div className={styles.stove_icon}></div>
                            <div><p>Modern Kitchen Appliances<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                        </div>
                        <div className={styles.benefit_info}>
                            <div className={styles.tree_icon}></div>
                            <div><p>Outdoor Paths<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                        </div>
                        <div className={styles.benefit_info}>
                            <div className={styles.cofee_icon}></div>
                            <div><p>Coffee Maker<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                        </div>
                        <div className={styles.benefit_info}>
                            <div className={styles.forest_icon}></div>
                            <div><p>Natural Scenery<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                        </div>
                    </div>
                    <div className={styles.benefits_about}>
                        <div className={styles.benefit_info}>
                            <div className={styles.conditioner_icon}></div>
                            <div><p>Air Conditioner<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                        </div>
                        <div className={styles.benefit_info}>
                            <div className={styles.storage_icon}></div>
                            <div><p>Storage Solutions<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                        </div>
                        <div className={styles.benefit_info}>
                            <div className={styles.glass_icon}></div>
                            <div><p>Cutlery Selection<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                        </div>
                        <div className={styles.benefit_info}>
                            <div className={styles.pizza_icon}></div>
                            <div><p>Take-away Options<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.rewievs}>
                <div className={styles.orange_line}></div>
                <div className={styles.rewievs_header}><p>Past guests.</p></div>
                <div><p>Don't take our word for it! Have a look at what our previous guests say<br/> about their stay at the Guest House.</p></div>
                <div>
                    <div className={styles.rewiews_cards}>
                        <div className={styles.first_card}>
                            <div className={styles.rewiev_rate}>
                                <div className={styles.star_icon}></div>
                                <div className={styles.star_icon}></div>
                                <div className={styles.star_icon}></div>
                                <div className={styles.star_icon}></div>
                                <div className={styles.star_icon}></div>
                            </div>
                            <h4>We had an amazing stay at the Guest House!</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                            <div className={styles.name}>
                                <div className={styles.smallorange_line}></div>
                                <p>Nate Davidsson</p>
                            </div>                        
                        </div>
                        <div className={styles.second_card}>
                            <div className={styles.rewiev_rate}>
                                <div className={styles.star_icon}></div>
                                <div className={styles.star_icon}></div>
                                <div className={styles.star_icon}></div>
                                <div className={styles.star_icon}></div>
                                <div className={styles.starOutline_icon}></div>
                            </div>
                            <h4>Beautiful little hideaway.</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
                            <div className={styles.name}>
                                <div className={styles.smallorange_line}></div>
                                <p>Laura Paulie</p>
                            </div>                        
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.bedroom_img}></div>
            <Footer />
        </>
    )
}
