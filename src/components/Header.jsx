import React from 'react'
import { useEffect, useState } from 'react'
import Modal from './UI/Modal'
import Cart from './Cart'
import styles from "./Header.module.css";
import Container from './UI/Container';
import { BsFillCartFill } from "react-icons/bs";
import { useCart } from '../contexts/CartProvider';

function Header() {
   const{cart} = useCart();
   const totalQuantity = cart.reduce((total, item)=>{
        return total+item.quantity;
   }, 0)
   const[isModalOpen, setIsModalOpen]= useState(false);

    function closeModal(){
        setIsModalOpen(false);
    }

    function handleClick(){
        setIsModalOpen(true);
    }

    useEffect(()=>{
        if(isModalOpen){
            document.documentElement.style.overflowY= "hidden";
        }
        else{
            document.documentElement.style.overflowY= "scroll";
        }
        
    },[isModalOpen])

  return (
    <header className={styles.header}>
        <Container>
        <nav className={styles.nav}>
            <h1>Electronics Shop</h1>
            <button onClick={handleClick} className={styles.showCartButton}>
            <span className={styles.cartIconAndNumber}>
            <BsFillCartFill />
            {totalQuantity > 0 && <span className={styles.number}> {totalQuantity}
            </span>}
            </span>
            <span>Cart</span>
            </button>
        </nav>
        </Container>

        {isModalOpen && <Modal closeModal = {closeModal}>
           <Cart/> 
        </Modal>}
        
    </header>
  )
}

export default Header
