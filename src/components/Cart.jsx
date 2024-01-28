import React from 'react'
import { useCart } from '../contexts/CartProvider'
import CartItem from './CartItem';
import styles from "./Cart.module.css"

function Cart() {
  const{cart} = useCart();
  if(cart.length === 0){
    return <h1 className={styles.noItemTitle}>Add Items From Store</h1>
  }
  let totalAmount = 0;
  
  for(let item of cart){
    totalAmount += item.price * item.quantity;
  }

  return (
    <div className={styles.cart}>
      <h2 className={styles.cartHeading}>Shopping Cart</h2>
    <div>
      {cart.map((cartItem)=>{
       return <CartItem key={cartItem.id} {...cartItem}/>
      })}
    </div>
    <h1>
      Total Amount : &#8377;{totalAmount}
    </h1>
    </div>
    
  )
}

export default Cart
