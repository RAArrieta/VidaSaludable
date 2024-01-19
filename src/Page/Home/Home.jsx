import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <div className="home">
            <Link className="btnHome" to="/ejercicios">Ejercicios</Link>
            <Link className="btnHome" to="/alimentacion">Alimentacion</Link>
            <Link className="btnHome" to="/seguimiento">Seguimiento</Link>
        </div>
    )
}

export default Home
