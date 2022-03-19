import Image from 'next/image'
import styles from '../styles/PizzaCard.module.css'

export const PizzaCard = () => {
  return (
    <div className={styles.container}>
        <Image src="/img/pizza.png" width="500" height="500"/>
        <h1 className={styles.title}> FIORI DI ZUCCA</h1>
        <span className={styles.price}> 20.00€</span>
        <p className={styles.desc}>Descripcion de la pizza de como queda</p>
    </div>
  )
}
