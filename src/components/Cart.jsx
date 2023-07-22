import { useSelector } from "react-redux";
import SingelProduct from "./SingelProduct";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);
  if(cartProducts.length==0){
    return <p>No Product in your cart !</p>
  }
  const product = cartProducts.map((item) => {
    return <SingelProduct key={item.id} product={item} fromcart={true} />;
  });
  return <div className="row">{product}</div>;
};

export default Cart;
