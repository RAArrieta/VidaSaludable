// import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="fondo">
            <Link className="btnPrincipal" to="/ejercicios">Ejercicios</Link>
            <Link className="btnPrincipal" to="/alimentacion">Alimentacion</Link>
            <Link className="btnPrincipal" to="/seguimiento">Seguimiento</Link>
        </div>
    )
}

export default Home
