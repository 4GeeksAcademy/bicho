import { useCart } from "../../hooks/CartContext"
import trash from "@/assets/icons/delete.png"

export default function CartItems({product}){
    const {cart,dispatch} = useCart()

    return(
        <div className="border-b-1 border-secondary border-dotted">

            <div className="flex">        
                <div className="w-1/4 flex items-center ">{product.name}</div>
                <div className="w-1/4 flex items-center justify-center">
                ${product.price}              
                </div>
                <div className="w-1/4 flex justify-evenly">
                {product.quantity == 1 ? 
                <button 
                className=" p-3 flex items-center "
                onClick={() =>dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product.id,
                })}>
                    <img src={trash} className="w-4"/>
                </button>
                :
                <button 
                className=" p-3 flex items-center "
                onClick={() =>dispatch({
                    type: "DECREASE_QUANTITY",
                    payload: product.id,
                    })}>-</button>
                }
                 <div className="flex items-center" >{product.quantity}</div>   
                <button 
                className="p-3 flex items-center "
                onClick={() =>dispatch({
                    type: "INCREASE_QUANTITY",
                    payload: product.id,
                })}
                >+</button>
                </div>
                <div className="w-1/4 flex items-center justify-center">{product.quantity * product.price}</div>
            </div>
        </div>
    )
}