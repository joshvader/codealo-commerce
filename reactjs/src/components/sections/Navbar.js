import { Link } from "react-router-dom"
import "../pages/product.css"
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">PCNIEL</a>
          
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
                <Link  to="/"class="nav-link active" >Home</Link>
              
                <Link  to="/acer"class="nav-link active" >Acer</Link>
              
              
               
            
            
          </div>
        </div>
      </nav>
    )
}

export default Navbar
