import { Card, CardBody, CardSubtitle, CardTitle, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteproduct } from "../redux/CartSlice";
const SingelProduct = ({ product, fromcart }) => {
  const dispatch = useDispatch();

  const addToCart = (product) => {
    // dispatch action
    dispatch(add(product));
  };
  const deleteFromCart=(id)=>{
    dispatch(deleteproduct(id))
  }
  return (
    <div style={{ width: "23%", margin: "20px 10px" }}>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src={product.image} width={"100%"} height={"200px"} />
        <CardBody>
          <CardTitle tag="h5">{product.title.slice(0, 20)}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            BDT {product.price}
          </CardSubtitle>

          {fromcart ? (
            <Button color="danger" onClick={()=>deleteFromCart(product.id)}>REMOVE ITEM</Button>
          ) : (
            <Button color="primary" onClick={() => addToCart(product)}>
              ADD TO CART
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default SingelProduct;
