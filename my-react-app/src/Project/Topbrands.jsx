import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom";

function Topbrands() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/shopt-data2")
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
          id: product.id,
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
      <h3 className="text-center mb-4">Top Brands Collection</h3>
      <div className="row g-4">
        {products.map((p) => (
          <div className="col-12 col-sm-6 col-md-4" key={p.id}>
            <div className="card h-100 shadow text-center">
              <img src={p.myimg2} className="card-img-top" alt={p.titlee2} />
              <div className="card-body">
                <h5>{p.titlee2}</h5>
                <p>{p.mytag2}</p>
                <p>₹{p.Price}</p>
                <div className="d-flex justify-content-between">
                    <button
                      className="btn btn-outline-primary"
                      onClick={()=> 
                        addToCart(p)
 }
                    >
                      Add to Cart
                    </button>

                    <button
                      className="btn btn-success"
                      onClick={() =>buyNow(p)}
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

//  {/* Card 2 */}
//         <div className="col-md-4 col-sm-6">
//           <div className="card h-100 shadow text-center">
//             <img src="" className="card-img-top" alt="Die Car 2" />
//             <div className="card-body">
//               <h5 className="card-title"></h5>
//               <p className="card-text"></p>
//               <button className="btn btn-success">Buy Now</button>
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="col-md-4 col-sm-6">
//           <div className="card h-100 shadow text-center">
//             <img src="" className="card-img-top" alt="Die Car 3" />
//             <div className="card-body">
//               <h5 className="card-title"></h5>
//               <p className="card-text"></p>
//               <button className="btn btn-warning">Buy Now</button>
//             </div>
//           </div>
//         </div>

       
//       </div>
//     </div>
//     <div className="container my-5">
//       <h3 className="text-center mb-4">MATCHBOX Cars Collection</h3>

//       <div className="row g-4">

//         {/* Card 1 */}
//         <div className="col-md-4 col-sm-6">
//           <div className="card h-100 shadow text-center">
//             <img src="" className="card-img-top" alt="Die Car 1" />
//             <div className="card-body">
//               <h5 className="card-title"></h5>
//               <p className="card-text"></p>
//               <button className="btn btn-primary">Buy Now</button>
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="col-md-4 col-sm-6">
//           <div className="card h-100 shadow text-center">
//             <img src="" className="card-img-top" alt="Die Car 2" />
//             <div className="card-body">
//               <h5 className="card-title"></h5>
//               <p className="card-text"></p>
//               <button className="btn btn-success">Buy Now</button>
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="col-md-4 col-sm-6">
//           <div className="card h-100 shadow text-center">
//             <img src="" className="card-img-top" alt="Die Car 3" />
//             <div className="card-body">
//               <h5 className="card-title"></h5>
//               <p className="card-text"></p>
//               <button className="btn btn-warning">Buy Now</button>
//             </div>
//           </div>
//         </div>

//         <div className="container my-5">
//       <h3 className="text-center mb-4">MAISTO Bikes Collection</h3>

//       <div className="row g-4 justify-content-center">

//         {/* Card 1 */}
//         <div className="col-md-4 col-sm-6">
//           <div className="card h-100 shadow text-center">
//             <img src="" className="card-img-top" alt="Die Cast Bike 1" />
//             <div className="card-body">
//               <h5 className="card-title"></h5>
//               <p className="card-text"></p>
//               <button className="btn btn-primary">Buy Now</button>
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="col-md-4 col-sm-6">
//           <div className="card h-100 shadow text-center">
//             <img src="" className="card-img-top" alt="Die Cast Bike 2" />
//             <div className="card-body">
//               <h5 className="card-title"></h5>
//               <p className="card-text"></p>
//               <button className="btn btn-success">Buy Now</button>
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="col-md-4 col-sm-6">
//           <div className="card h-100 shadow text-center">
//             <img src="" className="card-img-top" alt="Die Cast Bike 3" />
//             <div className="card-body">
//               <h5 className="card-title"></h5>
//               <p className="card-text"></p>
//               <button className="btn btn-warning">Buy Now</button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>

//       </div>
//     </div>
//     <div className="container my-5">
//       <h3 className="text-center mb-4"></h3>

//       <div className="row g-4 justify-content-center">

//         {/* Card 1 */}
//         <div className="col-md-4 col-sm-6">
//           <div className="card h-100 shadow text-center">
//             <img src="" className="card-img-top" alt="Die Cast Bike 4" />
//             <div className="card-body">
//               <h5 className="card-title"></h5>
//               <p className="card-text"></p>
//               <button className="btn btn-danger">Buy Now</button>
//             </div>
//           </div>
//         </div>

//         {/* Card 2 */}
//         <div className="col-md-4 col-sm-6">
//           <div className="card h-100 shadow text-center">
//             <img src="" className="card-img-top" alt="Die Cast Bike 5" />
//             <div className="card-body">
//               <h5 className="card-title"></h5>
//               <p className="card-text"></p>
//               <button className="btn btn-info">Buy Now</button>
//             </div>
//           </div>
//         </div>

//         {/* Card 3 */}
//         <div className="col-md-4 col-sm-6">
//           <div className="card h-100 shadow text-center">
//             <img src="" className="card-img-top" alt="Die Cast Bike 6" />
//             <div className="card-body">
//               <h5 className="card-title"></h5>
//               <p className="card-text"></p>
//               <button className="btn btn-dark">Buy Now</button>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//     <div className="container my-4">
//       <h3 className="text-center mb-4">LEGO Trucks – New Arrivals</h3>
//   <div className="row g-4">

//     <div className="col-md-4">
//       <div className="card h-100 shadow-sm">
//         <img
//           src=""
//           className="card-img-top"
//           alt="Educational Toys"
//         />
//         <div className="card-body text-center">
//           <h5 className="card-title"></h5>
//           <p className="card-text">
            
//           </p>
//           <button className="btn btn-primary">View More</button>
//         </div>
//       </div>
//     </div>

//     <div className="col-md-4">
//       <div className="card h-100 shadow-sm">
//         <img
//           src=""
//           className="card-img-top"
//           alt="Remote Cars"
//         />
//         <div className="card-body text-center">
//           <h5 className="card-title"></h5>
//           <p className="card-text">
            
//           </p>
//           <button className="btn btn-success">Shop Now</button>
//         </div>
//       </div>
//     </div>

//     <div className="col-md-4">
//       <div className="card h-100 shadow-sm">
//         <img
//           src=""
//           className="card-img-top"
//           alt="Soft Toys"
//         />
//         <div className="card-body text-center">
//           <h5 className="card-title">Soft Toys</h5>
//           <p className="card-text">
//             Cute and safe soft toys for all ages.
//           </p>
//           <button className="btn btn-warning">Explore</button>
//         </div>
//       </div>
//     </div>
