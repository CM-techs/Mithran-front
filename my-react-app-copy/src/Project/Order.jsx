import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";



function Order() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!id) return;
  console.log(id)

    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/products/${id}`
        );
        
        setProduct(res.data);
        setQty(res.data.qty || 1); // default qty
      } catch (err) {
        console.log("API Error:", err);
      }
    };

    fetchProduct();
  }, [id]);

  // Increase qty
  const increaseQty = () => {
    if(qty<5){
    setQty(qty + 1);
  } else{
    alert("Maximum limit reached")
  }
    
  };

  // Decrease qty
  const decreaseQty = () => {
    if (qty > 1) setQty(qty - 1);
  };

  if (!product) {
    return <h4 className="text-center mt-5">Loading...</h4>;
  }
   const orderd =async ()=>{
     await axios.post("http://localhost:3000/order", {
          id: product.id,
          myimg2: product.myimg2,
          titlee2: product.titlee2,
          mytag2: product.mytag2,
          price: product.price * qty,
          qty: product.qty
        }
     , alert("Your item order successfully"));
   }
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Order Summary</h3>

      <div className="card shadow p-4 text-center">
        <img
          src={product.myimg2}
          alt={product.titlee2}
          className="mx-auto"
          style={{ width: "200px" }}
        />

        <h5 className="mt-3">{product.titlee2}</h5>
        <p>{product.mytag2}</p>

        <p><strong>Price:</strong> ₹{product.Price}</p>

        {/* Quantity Controls */}
        <div className="d-flex justify-content-center align-items-center gap-3">
          <button
            className="btn btn-danger"
            onClick={decreaseQty}
          >
            -
          </button>

          <h5>{qty}</h5>

          <button
            className="btn btn-success"
            onClick={increaseQty}
          >
            +
          </button>
        </div>

        <p className="mt-3">
          <strong>Total:</strong> ₹{product.Price * qty}
        </p>

        <button onClick={orderd}   className="btn btn-success mt-3">
          Confirm Order
        </button>
      </div>
    </div>
  );
}

export default Order;

