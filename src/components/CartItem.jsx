import React from 'react'
import { useCart } from '../contexts/CartProvider'
import styles from "./CartItem.module.css"
import{AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"
import{ImCross} from "react-icons/im"

function CartItem({id, price, img, title, quantity}) {
    const {increaseQuantity, decreaseQuantity, removeItem } = useCart();

  return (
    <div className={styles.cartItem}>
      {/* leftdiv */}
      <div className={styles.imgAndTitle}>
        <div className={styles.imgContainer}><img src={img} alt={title} className={styles.cartImg}/></div>
        <h3>{title}</h3>
      </div>

      {/* rightdiv */}
      <div className={styles.otherControls}>
        <div className={styles.qtyInput}>
          <button onClick={()=>{
        if(quantity<=1){
            return;
        }
        decreaseQuantity(id);
      }}><AiOutlineMinus/></button>
          <span className={styles.quantityDisplay}>{quantity}</span>
          <button onClick={()=>{
        increaseQuantity(id);
      }}><AiOutlinePlus/></button>
        </div>
        <p>&#8377;{price * quantity}</p>
        <button onClick={()=>{
        removeItem(id);
      }} className={styles.removeItemBtn}><ImCross/></button>
      </div>
      </div>
  )
}

export default CartItem
