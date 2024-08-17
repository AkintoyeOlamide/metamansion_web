import styles from "../../styles/components/mansions.module.css";
import m1 from "../../../public/m1.png"
import m2 from "../../../public/m2.png"
import m3 from "../../../public/m3.png";
import Image from "next/image";

const data = [
    {
        img: m1,
        name: 'KEYS METAVERSE ALPHA',
        desc: 'The first publicly-accessible, playable experience in the KEYS Metaverse showcasing the possibilities of the proprietary KEYS Metaverse Engine and platform. One mansion, one single-player level, first-person view.',
    },
    {
        img: m2,
        name: 'PROJECT PROCUREMENT PHASE 1',
        desc: 'Project Mercury Phase I is the transactional backbone to the KEYS Metaverse where you can buy, sell, and rent NFTs, create and grow businesses, and grow your portfolio.',
    },
    {
        img: m3,
        name: 'PROJECT PLUTO KICKOFF',
        desc: 'The beginingof physical asset integration within the KEYS metaverse ecosystem.',
    },
]

export const Mansions = () => {
    return (
        <section className={styles.section}>
            <span className={styles.title}>Meta Mansions</span>
            <svg width="288" height="18" viewBox="0 0 288 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M136.764 3.77283C86.9789 -4.43118 24.8442 2.63338 0 7.19117V13.0512C22.6734 8.80092 84.2291 2.85048 149.065 13.0512C213.902 23.252 268.704 15.3482 288 10.1212C263.035 16.4697 198.995 14.0278 136.764 3.77283Z" fill="#FFB800" />
            </svg>
            <p className={styles.desc}>
                Ther keysmetaverseisan interconnected ecosystem of products, services, and platforms that we constinously develop and improve with valued inputfrom our community
            </p>

            <div className={styles.mansion_cont}>
                {
                    data.map((_, i) => {
                        return (
                            <div key={i} className={styles.mansion}>
                                {
                                    i === 0
                                    &&
                                    <button className={styles.mansion_button}>
                                        Explore
                                    </button>
                                }

                                <div className={styles.mansion_img}>
                                    <Image
                                        src={_.img}
                                        alt={`mansion-img-${i}`}
                                        fill
                                        style={{ objectFit: 'cover', borderRadius: "10px 10px 0 0" }}
                                    />
                                </div>
                                <span className={styles.mansion_name}>{_.name}</span>
                                <span className={styles.mansion_desc}>{_.desc}</span>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}