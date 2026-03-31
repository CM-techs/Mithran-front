import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Billing() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("billingCart"));
    const storedTotal = localStorage.getItem("billingTotal");

    if (storedCart && storedTotal) {
      setCart(storedCart);
      setTotal(storedTotal);
    }
  }, []);

  if (cart.length === 0) {
    return <h3 className="text-center mt-5">No Order Found</h3>;
  }

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Billing Summary</h3>

      {cart.map((item) => (
        <div className="card mb-3 shadow" key={item.id}>
          <div className="row align-items-center p-3 g-3">
            <div className="col-12 col-md-3 text-center">
              <img
                src={item.myimg2}
                alt={item.titlee2}
                className="img-fluid rounded"
                style={{ maxHeight: "80px" }}
              />
            </div>

            <div className="col-12 col-md-6 text-center text-md-start">
              <h5>{item.titlee2}</h5>
              <p className="mb-1">{item.mytag2}</p>
              <p className="mb-0">₹{item.price} × {item.qty}</p>
            </div>

            <div className="col-12 col-md-3 text-center text-md-end">
              <h6 className="fw-bold">₹{item.price * item.qty}</h6>
            </div>
          </div>
        </div>
      ))}

      {/* Total Card */}
      <div className="card p-4 shadow mt-4">
        <h4 className="text-end">Total Amount: ₹{total}</h4>

        <div className="text-center mt-3">
          <button
            className="btn btn-primary"
            onClick={() => { 
              localStorage.removeItem("billingCart");
              localStorage.removeItem("billingTotal");
              navigate("/orderplaced");
              alert("Thank for Your Order")
            }}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Billing;
