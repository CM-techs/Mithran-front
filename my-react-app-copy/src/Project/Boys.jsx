import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

function Topbrands() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/boys")
      .then(res => setProducts(res.data));
  }, []);

  const addToCart = async (product) => {
    try {
      // Get cart items
      const cartRes = await axios.get("http://localhost:3000/cart-data");
      const cartItems = cartRes.data;

      const existingItem = cartItems.find(item => item.productId === product.id);

      if (existingItem) {
        // If exists → increase quantity
        await axios.patch(`http://localhost:3000/cart-data/${existingItem.id}`, {
          qty: existingItem.qty + 1
        });
      } else {
        // Else → add new item
        await axios.post("http://localhost:3000/cart-data", {
          productid: product.id,
          myimg2: product.myimg2,
          titlee2: product.titlee2,
          mytag2: product.mytag2,
          price: product.Price,
          qty: 1
        });
      }

      alert("Item added to cart!");
      navigate("/cart");
    } catch (err) {
      console.log(err);
    }

  };
  const buyNow = (product) => {
    navigate(`/order/${product.id}`);
  };

  return (
    <div className="container my-5">
      <h3 className="text-center mb-4">Boys Collection</h3>
      <div className="row g-4">
        {products.map((p) => (
          <div className="col-md-4 col-sm-6" key={p.id}>
            <div className="card h-100 shadow text-center">
              <img src={p.myimg2} className="card-img-top" alt={p.titlee2} />
              <div className="card-body">
                <h5>{p.titlee2}</h5>
                <p>{p.mytag2}</p>
                <p>₹{p.Price}</p>
                <div className="d-flex justify-content-between">
                  <button
                    className="btn btn-outline-primary"
                    onClick={() =>
                      addToCart(p)
                    }
                  >
                    Add to Cart
                  </button>

                  <button
                    className="btn btn-success"
                    onClick={() => buyNow(p)

                    }
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

export default Topbrands;
