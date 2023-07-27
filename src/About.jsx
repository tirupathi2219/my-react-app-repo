import styles from './About.module.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'

import p1 from './assets/flower.jpg'
import p2 from './assets/paint.jpg'
import p3 from './assets/6.jpg'
import { useEffect } from 'react'
export default function About() {
    const arr = [p1, p2, p3]
    let arrowicons, carousel, firstcardWidth
    useEffect(() => {
        carousel = document.querySelector(`.${styles.carousel}`)
        arrowicons = document.querySelectorAll(`.${styles.wrapper} i`)
        firstcardWidth = carousel.querySelector(`.${styles.card}`).offsetWidth;
        const carouselChildren = [...carousel.children]
        //get the number of cards that can fit in the carousel at once
        let cardPerView = Math.round(carousel.offsetWidth / firstcardWidth)

        //insert copies of the first few cards to begining of carousel for infinite scrolling
        carouselChildren.slice(-cardPerView).reverse().forEach((card) =>{
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);

        })
        //  //insert copies of the last few cards to begining of carousel for infinite scrolling
         carouselChildren.slice(0, cardPerView).reverse().forEach((card) =>{
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);

        })
        arrowicons.forEach((icon) => {
            icon.addEventListener("click", () => {
                carousel.scrollLeft += icon.id === "left" ? -firstcardWidth : firstcardWidth;
            })
        })

        const infiniteScroll = () => {
            console.log('36==',carousel.scrollLeft);
            if(Math.ceil(carousel.scrollLeft)-32 === 0) {
                console.log("reahed left");
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");


            } else if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
                console.log('reahed right');
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");

            }
        }
        carousel.addEventListener("scroll", infiniteScroll)
    },[])

    return (
        <div className={styles.bdy}>
            <div className={styles.wrapper}>
                <i id='left' className="bi bi-chevron-left"></i>
                <ul className={styles.carousel}>
                    {
                        arr.map((item, index) => <li key={index} className={styles.card}> <div className={styles.img}><img src={item} alt='img not found' /></div> </li>)
                    }
                </ul>
                <i id='right' className="bi bi-chevron-right"></i>

            </div>
        </div>
    )
}