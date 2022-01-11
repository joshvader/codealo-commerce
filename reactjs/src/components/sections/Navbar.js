import { Link } from "react-router-dom"
import "../pages/product.css"
const Navbar = () => {
  return (
    <nav className="navbar  fixed-top navbar-expand-lg bg-dark navbar-toggleable-md ">
      <div className="container-fluid">
        <button class="navbar-toggler collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon container__header__menu--button"></span>
        </button>
        <a className="navbar-brand">Notebooks</a>

        <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo03">

          <Link to="/" class="nav-link active" >Home</Link>

          <Link to="/acer" class="nav-link active" >Acer</Link>

          <Link to="/Hp" class="nav-link active" >HP</Link>

          <Link to="/Msi" class="nav-link active" >MSI</Link>

          <Link to="/Asus" class="nav-link active" >Asus</Link>

          <Link to="/Dell" class="nav-link active" >Dell</Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
