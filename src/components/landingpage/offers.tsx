"use client"

import styles from "../../styles/components/offers.module.css";
import { ChevronRight } from "lucide-react"

export const Offers = () => {
    return (
        <section className={styles.section}>
            <span className={styles.title}>What we have to offer</span>
            <svg className={styles.stripe} viewBox="0 0 597 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M283.5 3.77283C180.3 -4.43118 51.5 2.63338 0 7.19117V13.0512C47 8.80092 174.6 2.85048 309 13.0512C443.4 23.252 557 15.3482 597 10.1212C545.25 16.4697 412.5 14.0278 283.5 3.77283Z" fill="#FFB800" />
            </svg>

            {/* <div className={styles.offer_cont}>
                <div className={styles.offer}>
                    <img
                        src="./o1.png"
                        alt="offer_img"
                        className={styles.offer_img}
                    />
                    <div className={styles.offer_nav}>
                        <span>METAVERSE</span>
                        <ChevronRight color="white" />
                    </div>
                </div>

                <div className={styles.offer}>
                    <img
                        src="./o2.png"
                        alt="offer_img"
                        className={styles.offer_img}
                    />
                    <div className={styles.offer_nav}>
                        <span>MARKETPLACE</span>
                        <ChevronRight color="white" />
                    </div>
                </div>
            </div> */}

            {/* <img
                src="./_obg.png"
                className={styles.bg_img}
            /> */}

            <div className={styles.offer_bg}>
                <span>Experience Our Metaverse world</span>
                <button>EXPLORE</button>
            </div>
        </section>
    )
}