import React, { useState} from 'react';
import styles from './About.module.scss'

const  About = () => {
    const paginationSize = 3;
    let array =["1", "2", "3", "4", "5", "6", "7"]
    let navItems = []
    array.forEach((item, index) => navItems.push({"item":item,"index":index}))
    const [navItemstoShown, setNavItemstoShown] = useState(navItems.slice(0,paginationSize))
    const minFirst = navItems.length - paginationSize;
    const [firstIndex, setFirstIndex]= useState(1)
    const [lastIndex, setLastIndex]= useState(paginationSize)
    const minLast = navItems.length - 1;

let selected;

const previousClick = () => {
    if (firstIndex - 1 >= 0) {
        setFirstIndex(firstIndex - 1)
        setLastIndex((firstIndex - 1) + paginationSize)
        let val  = navItems.slice((firstIndex - 1), (firstIndex - 1) + paginationSize);
        setNavItemstoShown(val)
      }
}

function nextClick() {
    if (lastIndex < minLast) {
    setLastIndex(lastIndex + 1)
    
  }
  if (lastIndex - paginationSize <= minFirst) {
    setFirstIndex((lastIndex + 1) - paginationSize)
  }
  
  let val = navItems.slice((lastIndex + 1) - paginationSize, lastIndex + 1);
  setNavItemstoShown(val)
  }
  
 function navItemClick(item) {
    console.log('46==');
 }

return(
    <>
    <div className={styles.pagination}>
        <div onClick={previousClick}> - </div>
        {
            navItemstoShown.map((item) => { return <div onClick={navItemClick}>{item.item}</div>})
        }
        <div onClick={nextClick}> + </div>
    </div>
    </>
)

}

export default About;