import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import p1 from './assets/flower.jpg'
import p2 from './assets/paint.jpg'
import p3 from './assets/6.jpg'
import styles from './Contact.module.scss'

export default function Contact() {
    const arr = [p1, p2, p3, p1, p3]
    const [carousel, setCarousel] = useState(document.querySelector(`.${styles.carousel}`))
    const [arrowicons, setArrowIcons] = useState(document.querySelectorAll(`.${styles.wrapper} i`))
    const [firstImg, setFirstImg] = useState(document.querySelectorAll(`.${styles.carousel} img`)[0])

    useEffect(() => {
        setCarousel(document.querySelector(`.${styles.carousel}`))
        setArrowIcons(document.querySelectorAll(`.${styles.wrapper} i`))
        setFirstImg(document.querySelectorAll(`.${styles.carousel} img`)[0])
    }, [])
    
    useEffect(() => {
        if (arrowicons) {
            arrowicons.forEach((icon) => {
                icon.addEventListener("click", () => {
                    carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
                })
            })
        }
    }, [])

    console.log('13==', firstImg, document.querySelector(`.${styles.carousel}`));

    let isDragStart = false, prevPageX, prevScrollLeft;
    let firstImgWidth = firstImg?.clientWidth + 14; // getting first img width & adding 14 margin value
    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        let positionDiff = e.prevPageX - prevPageX
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }

    const dragStop = () => {
        isDragStart = false;
    }

    if (carousel) {
        carousel.addEventListener("mousedown", dragStart)
        carousel.addEventListener("mousemove", dragging)
        carousel.addEventListener("mouseup", dragStop)
    }

    return (
        <div className={styles.bdy}>
            <div className={styles.wrapper}>
                <i id='left' className="bi bi-chevron-left"></i>
                <div className={styles.carousel}>
                    {arr.map((item, index) => <img key={index} src={item} alt='' />)}
                </div>
                <i id='right' className="bi bi-chevron-right"></i>
            </div>
        </div>
    )
}