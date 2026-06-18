import { useCart } from "../../hooks/CartContext"
import cartSvg from "@/assets/icons/cart.svg"

export default function CartButton(){
    const {cart} = useCart()
    return(
            <div className="bg-primary ">
                <div className="text-white text-center">{cart.length}</div>
                <img className="w-7" src={cartSvg}/>                  
            </div>
    )
}