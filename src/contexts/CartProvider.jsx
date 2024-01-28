import { createContext, useContext, useReducer } from "react"
const CartContext = createContext();


function cartReducer(cart, action){
    if(action.type === "ADD_ITEM"){
        return [...cart, action.payload];
    }
    if(action.type ==="INCREASE_QUANTITY"){
        return cart.map((item)=>{
            if(item.id === action.payload.id){
                return {...item, quantity: item.quantity + 1}
            }
            else{
                return item;
            }
        })
    }

    if(action.type ==="DECREASE_QUANTITY"){
        return cart.map((item)=>{
            if(item.id === action.payload.id){
                return {...item, quantity: item.quantity - 1}
            }
            else{
                return item;
            }
        })
    }

    if(action.type ==="REMOVE_ITEM"){
        return cart.filter((item)=>{
            return item.id !== action.payload.id;
        })
    }

    return cart;
}

function CartProvider({children}) {

    const [cart, dispatch] = useReducer(cartReducer, []);

    const addItemToCart = (newCartItem)=>{
        dispatch({type: "ADD_ITEM", payload: newCartItem});
    }

    const increaseQuantity = (id)=>{
        dispatch({type: "INCREASE_QUANTITY", payload: {id: id}})
    }

    const decreaseQuantity = (id)=>{
        dispatch({type: "DECREASE_QUANTITY", payload: {id: id}})
    }

    const removeItem = (id)=>{
        dispatch({type: "REMOVE_ITEM", payload: {id: id}})
    }
    
  return (
    <CartContext.Provider value={{cart: cart, addItemToCart: addItemToCart, increaseQuantity:increaseQuantity, decreaseQuantity:decreaseQuantity, removeItem:removeItem}}>  
        {children}
    </CartContext.Provider>
  )
}
 
export function useCart(){
    return useContext(CartContext);
}

export default CartProvider
