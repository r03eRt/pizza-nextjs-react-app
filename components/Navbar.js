import Image from 'next/image'
import Link from 'next/link';
import { useSelector } from 'react-redux'
import styles from '../styles/Navbar.module.css'
export const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);

  return (
    <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <Image src="/img/telephone.png" height="32" width="32" />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>659 085 824</div>  
          </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
              <Link href="/" passHref>
                <li className={styles.listItem}>Homepage</li>
              </Link>              
              <li className={styles.listItem}>Products</li>
              <li className={styles.listItem}>Menu</li>
              <Image src="/img/logo.png" height="69px" width="160px" />
              <li className={styles.listItem}>Events</li>
              <li className={styles.listItem}>Blog</li>
              <li className={styles.listItem}>Contact</li>
            </ul>
        </div>
        <Link href="/cart" passHref>
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image src="/img/cart.png" height="30px" width="30px" />
              <div className={styles.counter}>{quantity}</div>
            </div>
          </div>
        </Link>
    </div>
  )
}
