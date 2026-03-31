import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProductList({ endpoint, title }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/${endpoint}`)
      .then(res => setProducts(res.data))
      .catch(err => console.log("Fetch Error:", err));
  }, [endpoint]);

  const addToCart = async (product) => {
    try {
      const cartRes = await axios.get("http://localhost:3000/cart-data");
      const cartItems = cartRes.data;

      // Consistent check using productId
      const existingItem = cartItems.find(item => item.productId === product.id);

      if (existingItem) {
        await axios.patch(`http://localhost:3000/cart-data/${existingItem.id}`, {
          qty: existingItem.qty + 1
        });
      } else {
        await axios.post("http://localhost:3000/cart-data", {
          productId: product.id,
          myimg2: product.myimg2,
          titlee2: product.titlee2,
          mytag2: product.mytag2,
          price: product.Price || product.price, // Handle cases where Price/price casing differs
          qty: 1
        });
      }

      alert("Item added to cart!");
      navigate("/cart");
    } catch (err) {
      console.log("Cart Error:", err);
    }
  };

  const buyNow = (product) => {
    navigate(`/order/${product.id}`);
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">{title}</h3>
      <div className="row g-4">
        {products.map((p) => (
          <div className="col-md-4 col-sm-6" key={p.id}>
            <div className="card h-100 shadow text-center">
              <img src={p.myimg2} className="card-img-top" alt={p.titlee2} />
              <div className="card-body">
                <h5>{p.titlee2}</h5>
                <p>{p.mytag2}</p>
                <p>₹{p.Price || p.price}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() => addToCart(p)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={() => buyNow(p)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
