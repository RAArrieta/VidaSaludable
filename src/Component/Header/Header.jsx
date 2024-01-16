import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./vidaSaludable.png"

const Header = () => {
  return (
    
    <Link className="header" to="/">
      <img src={logo} alt="Logo Vida Saludable" />
    </Link>
  )
}

export default Header
