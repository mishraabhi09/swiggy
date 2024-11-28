import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartslice";
import { clearCart } from "../utils/cartslice";





const Cart = () => {


    const dispatch = useDispatch();

    const handleRemoveItem = () => {
        dispatch(removeItem());
    };


    const handleClearCart = () => {
        dispatch(clearCart());
    }


    // Always give the specific path to the useSelector hook so that it can easily fetch the data of that specific portion.

    // we can subscribe to only specific part of our store . 
    const cartItems = useSelector(store => store.cart.items);


    return (
        <>
            <div className="cart" >

                <button className="cart_button" onClick={() => handleRemoveItem()}>
                    Remove Item
                </button>

                <button className="cart_button" onClick={() => handleClearCart()}>
                    Clear cart
                </button>

                <h2 className = "cart_len" >Cart Items : {cartItems.length}</h2>

            </div>
        </>
    )
}

export default Cart;