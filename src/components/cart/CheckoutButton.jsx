export default CheckoutButton;

import { useCart } from "../../hooks/CartContext"; 

function CheckoutButton() {
  const { cart } = useCart();

  const sendWhatsApp = () => {
    const phone = "525586814383"; 

    let message = "Hola, quiero consultar disponibilidad de estos productos:";


    cart.forEach((item) => {
      message += `${item.name}\nCantidad: ${item.quantity}\nPrecio: $${item.price}\n\n`;
    });

    const total = cart.reduce(
      (prev, item) => prev + item.price * item.quantity,
      0
    );

    message += `TOTAL: $${total}`;

    const encoded = encodeURIComponent(message);
    
    const url = `https://wa.me/${phone}?text=${encoded}`;

    window.open(url, "_blank");
  };

  return (
    <button className="bg-secondary text-white p-2 rounded my-2" onClick={sendWhatsApp}>
      Enviar mensaje
    </button>
  );
}

