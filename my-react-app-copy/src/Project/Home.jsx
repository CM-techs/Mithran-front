import { useNavigate } from "react-router-dom";
import axios  from"axios"
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useParams } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [mydata,setdata] =useState([])
  
   
   const {name} = useParams()
 
 useEffect ( ()=>{
   
  axios.get("http://localhost:3000/shop-data")
  .then((res)=>{
      setdata(res.data)
      console.log(res)
     
    
      
  })
 },[])
  return (
    <>
      {/* Carousel */}
     <div
      id="KUTTIES WORLDCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000" 
        // {*/auto scroll time (3 seconds)*/}
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#KUTTIES WORLDCarousel"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#KUTTIES WORLDCarousel"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#KUTTIES WORLDCarousel"
          data-bs-slide-to="2"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/offerimage1.jpg"
            className="d-block w-100"
            alt="Toy Offer"
          />
        </div>

        <div className="carousel-item">
          <img
            src="/offerimage2.jpg"
            className="d-block w-100"
            alt="Toy Sale"
          />
        </div>

        <div className="carousel-item">
          <img
            src="/offerimage.jpg"
            className="d-block w-100"
            alt="Kids Toys"
          />
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#KUTTIES WORLDCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#KUTTIES WORLDCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>

      {/* Greeting Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col text-center greeting-text">
            <h2 className="taghead">"Hello {name} "Welcome to Mithran Toys 🧸🌈</h2>
            <p className="mt-3">
             Mithran Toys is a joyful and colorful toy world where imagination
              comes alive. Discover toys that inspire creativity, fun, and
              happiness for kids of all ages.
            </p>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      
      <div className="container mb-5">
        <div className="row g-4">
      { mydata.map((x)=>{
        return<div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card h-100">
              <img src={x.myimg} className="card-img-top" alt="Toy" />
              <div className="card-body">
                <h5 className="card-title">{x.titlee}</h5>
                <p className="card-text">
                  {x.mytag}
                </p>
               
              </div>
            </div>
            
          </div>      
         
        
        })}

         </div>
         
       
      </div>
     
    <p className="text-center">
      <hr className="my-4" />

      <h3 className="text-center mb-3">About Us</h3>
       Welcome to <strong>KUTTIES WORLD</strong>! 🎁 <br />
        a trusted destination for quality children’s toys. We are committed to delivering safe, reliable, and affordable toys that support a child’s growth, creativity, and happiness.

AtMithran Toys, we carefully curate our products to meet high standards of quality, safety, and durability. Our range includes educational toys, creative play items, and fun-filled products designed to enhance learning, imagination, and motor skills across different age groups.

We place strong emphasis on customer satisfaction and child safety. Every product is selected with attention to:

Product quality and safety compliance

Age-appropriate design and usability

Value-driven pricing

Smooth and secure shopping experience

Our mission is to support families by providing toys that combine entertainment with learning, while maintaining affordability and trust. We aim to build long-term relationships with our customers by consistently delivering products that meet expectations.

KUTTIES WORLD continues to grow with a clear vision — to be a reliable and customer-focused toy brand that adds value to every child’s playtime.
      </p>

      <hr className="my-4" />

      <h3 className="text-center mb-3">Contact Us</h3>

      <div className="text-center">
        <p><strong>Email:</strong> kuttiesworld@gmail.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Chennai, Tamil Nadu, India</p>
      </div>

    
    </>
  );
}

export default Home;

     