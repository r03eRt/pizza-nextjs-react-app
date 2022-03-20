import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import styles from '../../styles/Product.module.css'
import { addProduct } from '../../redux/cartSlice'

export default function Product({ pizza }) {
    
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(pizza.prices[0]);
    const [quantity, setQuantity] = useState(1)
    const [extras, setExtras] = useState([]);
    const dispatch = useDispatch();

    const changePrice = (number) => {
        setPrice(price + number)
    }

    const handleSize = (sizeIndex) => {
        // calculamos la diferencia calculando el valor de la pizza del tamaño que acabamos 
        // de pulsar menos el valor de la pizza del tamaño que teniamos señalado antes
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    }

    const handleChange = (e, option) => {
        const checked = e.target.checked;
        if(checked) {
            changePrice(option.price);
            // añadimos la opcion seleccionada al array actial de extras
            setExtras([...extras, option])
        } else {
            changePrice(-option.price);
            // nos quedamos con los elementos del array que son distintos al que quitamos
            setExtras(extras.filter(extra => extra._id !== option._id))
        }
    }

    const handleClick = () => {       
       dispatch(addProduct({...pizza, extras, price, quantity})) 
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} layout="fill" objectFit="contain"/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.price}>{price}€</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose the size</h3>
                <div className={styles.sizes} >
                    <div className={styles.size} onClick={ () => handleSize(0)}>
                        <Image src="/img/size.png" layout="fill"/>
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={ () => handleSize(1)}>
                        <Image src="/img/size.png" layout="fill"/>
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={ () => handleSize(2)}>
                        <Image src="/img/size.png" layout="fill"/>
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose the aditial  Ingredients</h3>
                <div className={styles.ingredients}>
                    {
                        pizza.extraOptions.map(option => (
                            <div key={option._id} className={styles.option}>
                                <input 
                                    type="checkbox"
                                    id={option.text}
                                    name={option.text}
                                    className={styles.checkbox} 
                                    onChange={(e) => handleChange(e, option)}
                                />
                                <label htmlFor="double">{option.text}</label>
                            </div>   
                        ))
                    }
                                
                </div>
                <div className={styles.add} >
                    <input type="number" min="1" defaultValue={1} className={styles.quantity} onChange={(e) => setQuantity(e.target.value)} />
                    <button className={styles.button} onClick={() => handleClick()}>Add to cart</button>
                </div>
            </div>
        </div>
    )
    }

    export const getServerSideProps = async ({ params }) => {
        const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
        return {
        props: {
                pizza: res.data
            }
        }
    }