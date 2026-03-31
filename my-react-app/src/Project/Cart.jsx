import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate =useNavigate()

  const loadCart = async () => {
    const res = await axios.get("http://localhost:3000/cart-data");
    setCart(res.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  // Increase qty
  const increaseQty = async (item) => {
    if(item.qty<5){
    await axios.patch(`http://localhost:3000/cart-data/${item.id}`, {
      qty: item.qty + 1
    });
  }if(item.qty===5){ alert("Maximum limit reached")}
 
    loadCart();
  };

  // Decrease qty
  const decreaseQty = async (item) => {
    if (item.qty === 1) {
      await axios.delete(`http://localhost:3000/cart-data/${item.id}`);
    } else {
      await axios.patch(`http://localhost:3000/cart-data/${item.id}`, {
        qty: item.qty - 1
      });
    }
    loadCart();
  };

  // Remove item
  const removeItem = async (item) => {
    await axios.delete(`http://localhost:3000/cart-data/${item.id}`);
    loadCart();
  };

  // Calculate total
  useEffect(() => {
    const t = cart.reduce((acc, item) => acc + (item.qty * item.price), 0);
    setTotal(t);
  }, [cart]);

  const Order = (product) => {
  navigate(`/order/${product.id}`);}
  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Your Cart</h3>

      {cart.length === 0 && <p className="text-center">Cart is empty</p>}

      {cart.map(item => (
        <div className="card mb-3 p-3 shadow" key={item.id}>
          <div className="row align-items-center g-3">
            <div className="col-12 col-md-3 text-center">
              <img src={item.myimg2} alt={item.titlee2} className="img-fluid rounded" style={{ maxHeight: "150px", width: "auto" }} />
            </div>
            <div className="col-12 col-md-3 text-center text-md-start">
              <h5>{item.titlee2}</h5>
              <p className="mb-1">{item.mytag2}</p>
              <p className="mb-0"><b>Price:</b> ₹{item.price}</p>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center">
              <button className="btn btn-outline-secondary btn-sm" onClick={() => decreaseQty(item)}>−</button>
              <span className="mx-3 fw-bold">{item.qty}</span>
              <button className="btn btn-outline-secondary btn-sm" onClick={() => increaseQty(item)}>+</button>
            </div>
            
            <div className="col-12 col-md-3 d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center">
              <button
                      className="btn btn-success w-100 w-md-auto"
                      onClick={() =>Order(item)}
                    >
                      Buy Now
                    </button>
              <button className="btn btn-danger w-100 w-md-auto" onClick={() => removeItem(item)}>Remove</button>
            </div>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <h4 className="text-end mt-4">Total: ₹{total}</h4>
      )}
    </div>
  );
}

export default Cart;
