import { Link, useNavigate, useNavigation, useParams } from "react-router-dom"
import "./Carosel.css"

function Navbar(){
    const navigate =useNavigate()
    const { name } = useParams();
       console.log(name)
    return<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link  to={`/Home/${name}`} className="navbar-brand">Mithran Toys World</Link>
    
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={`/Home/${name}`}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/top">Top brands</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" to="/cart" >Cart</Link>
        </li>
        
        
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/products" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Products
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/boy">Boy</Link></li>
            <li><Link className="dropdown-item" to="/girl">Girl</Link></li>
           
           
          </ul>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active" to="/about" >About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact" >Contact Us</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button  className="btn btn-outline-success" type="submit">Search</button>
      </form>
       <button
        className="add-account-btn"
        onClick={() => navigate("/add-account")}
      >
         Account
      </button>
      
    </div>
  </div>
  

</nav>

    </>
}export default Navbar
