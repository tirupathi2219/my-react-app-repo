// import styles from './About.module.scss'
import './About.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import p1 from './assets/flower.jpg'
import p2 from './assets/paint.jpg'
import p3 from './assets/6.jpg'
import { useEffect } from 'react'
export default function About() {
    const arr = [p1, p2, p3]
    let arrowBtns, carousel, firstcardWidth

    const infiniteScroll = () => {
        console.log('36==', carousel.scrollLeft);
        // If the carousel is at the beginning, scroll to the end
if((carousel.scrollLeft - 32) === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
    carousel.classList.remove("no-transition");
}
// If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
}
    }
    useEffect(() => {
        carousel = document.querySelector(`.carousel`)
        arrowBtns = document.querySelectorAll(`.wrapper i`)
        firstcardWidth = carousel.querySelector(`.card`).offsetWidth;

        console.log("33==",{carousel, arrowBtns, firstcardWidth});
        const carouselChildrens = [...carousel.children]
        //get the number of cards that can fit in the carousel at once
        let cardPerView = Math.round(carousel.offsetWidth / firstcardWidth);

        //insert copies of the first few cards to begining of carousel for infinite scrolling
        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });
        //  //insert copies of the last few cards to begining of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ? -firstcardWidth : firstcardWidth;
            });
        });

        
        carousel.addEventListener("scroll", infiniteScroll)
    }, [])

    return (
        <div className="bdy">
            <div className="wrapper">
                <i id='left' className="bi bi-chevron-left"></i>
                <ul className='carousel'>
                    {
                        arr.map((item, index) => <li key={index} className="card"> <div className="img"><img src={item} alt='img not found' /></div> </li>)
                    }
                </ul>
                <i id='right' className="bi bi-chevron-right"></i>

            </div>
        </div>
    )
}