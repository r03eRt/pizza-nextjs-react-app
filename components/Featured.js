import Image from 'next/image'
import { useState } from 'react';
import styles from '../styles/Featured.module.css'


export const Featured = () => {

  const [index, setIndex] = useState(0)

  const images = [
    "/img/featured0.jpg",
    "/img/featured1.jpg",
    "/img/featured2.jpg"
  ];

  const handleArrow = (direction) => {
    if(direction === 'l') {
      setIndex(index !== 0 ? index-1 : 2)
    }
    if(direction === 'r') {
      setIndex(index !== 2 ? index+1 : 0)
    }
  }

  console.log('====================================');
  console.log(index);
  console.log('====================================');
  
  return (
    <div className={styles.container}>            
        <div className={styles.wrapper} style={{ transform: `translateX(${index * -100 }vw)`}}>
            { 
              images.map((image, i) => (
                <div className={styles.imgContainer} key={i}>
                  <Image src={image} layout='fill' objectFit="contain"/>
                </div>
              ))
            }
                           
        </div>
        <div className={styles.arrowContainer}>
          <Image src="/img/arrowl.png" layout="fill"  style={{ left: 0 }} onClick={ () => handleArrow('l')} objectFit="contain"/>
        </div>  
        <div className={styles.arrowContainer} style={{ right: 0 }} onClick={ () => handleArrow('r')} objectFit="contain">
        <Image src="/img/arrowr.png" layout="fill" />
      </div>
    </div>
  )
}
