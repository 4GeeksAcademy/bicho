
import CartItems from "../components/cart/CartItems";
import CheckoutButton from "../components/cart/CheckoutButton";
import { useCart } from "../hooks/CartContext";

export const Cart = () => {

  const {cart, dispatch} = useCart()

  //Total amount 
  const total = cart.reduce(
    (prev, item) => prev + item.price * item.quantity,
    0
  );
  
  return (
    <div className="m-4">
      <div className="text-primary text-center font-s bg-warning py-2">
        Por el momento no contamos con pagos en linea, para continuar con tu compra con gusto te atenderemos por WhatsApp.
      </div>
      <div className="text-secondary font-bold text-center mt-4">Carrito </div>
            <div className="flex py-2">        
                <div className="w-1/4 text-secondary text-center font-medium">producto</div>
                <div className="w-1/4 text-secondary text-center font-medium">precio</div>
                <div className="w-1/4 text-secondary text-center font-medium">cantidad</div>
                <div className="w-1/4 text-secondary text-center font-medium">subtotal</div>
            </div>
        <div>

      {cart.map((product) => (
          <CartItems key={product.id} product={product}/>
      ))}

     
    </div>
     <div className="flex flex-col items-end py-2">
      <div className="w-1/4 text-center text-secondary font-bold">Total: ${total}</div>
      <div className="w-1/4 flex justify-center">
      <CheckoutButton/>
      </div>
      </div>
  
    </div>
  );
};
