import { NavLink, Link, useNavigate, useNavigation, useParams } from "react-router-dom"
import "./Carosel.css"

function Navbar(){
    const navigate =useNavigate()
    const { name } = useParams();
       console.log(name)
    return<>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link  to={name ? `/Home/${name}` : "/"} className="navbar-brand">Mithran Toys World</Link>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5 px-3">
         <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"} aria-current="page" to={name ? `/Home/${name}` : "/"}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"} aria-current="page" to="/top">Top brands</NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"} to="/cart" >Cart</NavLink>
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
          <NavLink className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"} to="/about" >About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active-link" : "nav-link"} to="/contact" >Contact Us</NavLink>
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
