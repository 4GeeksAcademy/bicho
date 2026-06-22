import {useCart} from "../../hooks/CartContext"
import { screenSize } from "../../hooks/screenSize"
import AddCart from "@/assets/icons/addCart.png"

export default function ProductCard({product}){

    const {dispatch} = useCart();

    const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
        });
    };

    const {isDesktop, isMobile, isLaptop,isTablet} = screenSize()
    return(
        <div className={`h-80 border rounded-lg flex flex-col w-full max-w-xs`}>
            <div className="max-h-1/2 overflow-hidden">
                <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full  rounded-t-lg "
                />
            </div>
            <div className=" flex flex-1 rounded-b-lg p-3 bg-linear-to-r from-light to-muted max-h-1/2">
                <div className="w-3/4 flex flex-col ">
                    <div className="text-primary font-semibold text-lg">{product.name}</div>
                    <div className="text-sm">{product.description} </div>
                </div>
                <div className="w-1/4 flex flex-col items-end ">
                    <div className="text-lg text-secondary font-bold">${product.price}</div>
                    <button className="transition duration-170 hover:scale-105 active:scale-75" onClick={addToCart}>
                        <img className=" h-12 bg-accent p-2 rounded-full " src={AddCart}/>
                    </button>
                    
                </div>                
            </div>
        </div>
    )
}