import Counter from "../../Component/Counter/Counter";
import "./Ejercicios.css"
import { useState } from "react";

const Ejercicio = ({ id, estado, ejercicio }) => {
    const [ejercicioOn, setEjercicioOn] = useState(false);

    const handleToggle = () => {
        setEjercicioOn(!ejercicioOn);
    };

    return (
        <div>
            <button onClick={handleToggle} className="btnEjercicios">
                <div>{`${id}`}</div>
            </button>
            {ejercicioOn && (
                <div className={ejercicioOn ? "dataSerie" : ""}>
                    <div>Día {`${estado}`}</div>
                    <Counter ejercicio={ejercicio}/>
                </div>
            )}
        </div>
    );
};

export default Ejercicio;
