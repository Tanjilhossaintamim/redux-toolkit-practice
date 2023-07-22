import { useEffect } from "react";
import SingelProduct from "./SingelProduct";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/ProductSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  if (status == "loading") {
    return <p>loading .......</p>;
  }
  if(status=='failed'){
    return <p>some thing went wrong try again .......</p>
  }
  

  const product = products.map((item) => {
    return <SingelProduct product={item} key={item.id} />;
  });

  return <div className="row">{product}</div>;
};

export default Product;
