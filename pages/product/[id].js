import Image from 'next/image'
import { useState } from 'react'
import styles from '../../styles/Product.module.css'

export default function Product() {
    const pizza = {
        id: 1,
        img: '/img/pizza.png',
        name: 'CAMPAGNOLA',
        price: [ 19.90, 23.90, 27.90],
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
    }
    const [size, setSize] = useState(0)
    
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" objectFit="contain"/>
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>{pizza.name}</h1>
            <span className={styles.price}>{pizza.price[size]}€</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes} >
                <div className={styles.size} onClick={ () => setSize(0)}>
                    <Image src="/img/size.png" layout="fill"/>
                    <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size} onClick={ () => setSize(1)}>
                    <Image src="/img/size.png" layout="fill"/>
                    <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size} onClick={ () => setSize(2)}>
                    <Image src="/img/size.png" layout="fill"/>
                    <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>Choose the aditial  Ingredients</h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input 
                        type="checkbox"
                        id="double"
                        name="double"
                        className={styles.checkbox} 
                    />
                    <label htmlFor="double">Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input 
                        type="checkbox"
                        id="cheese"
                        name="dobule"
                        className={styles.checkbox} 
                    />
                    <label htmlFor="cheese">Extra Cheese</label>
                </div>
                <div className={styles.option}>
                    <input 
                        type="checkbox"
                        id="spicy"
                        name="spicy"
                        className={styles.checkbox} 
                    />
                    <label htmlFor="spicy">Spicy Sauce</label>
                </div>
                <div className={styles.option}>
                    <input 
                        type="checkbox"
                        id="garlic"
                        name="garlic"
                        className={styles.checkbox} 
                    />
                    <label htmlFor="garlic">Garlic Sauce</label>
                </div>
            </div>
            <div className={styles.add} >
                <input type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button}>Add to cart</button>
            </div>
        </div>
    </div>
  )
}
