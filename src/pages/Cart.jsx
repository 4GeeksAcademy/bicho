
import { useCart } from "../hooks/CartContext";

export const Cart = () => {

  const {cart, dispatch} = useCart()

  //Total amount 
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  
  return (
    <div className="container">
      <div className="text-secondary font-bold text-center mt-4">Carrito </div>

        <div className="flex flex-col items-center">

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>

          <p>
            ${item.price} x {item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch({
                type: "INCREASE_QUANTITY",
                payload: item.id,
              })
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "DECREASE_QUANTITY",
                payload: item.id,
              })
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: item.id,
              })
            }
          >
            Eliminar
          </button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </div>
    </div>
  );
};
