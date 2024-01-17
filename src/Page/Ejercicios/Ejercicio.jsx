import Counter from "../../Component/Counter/Counter";
import "./Ejercicios.css"
import { useState } from "react";
import Series from "./Series";

const Ejercicio = ({ id, estado }) => {
    const [ejercicioOn, setEjercicioOn] = useState(false);

    const handleToggle = () => {
        setEjercicioOn(!ejercicioOn);
    };

    const [serieOn, setSerieOn] = useState(false)

    const handleToggleOnSerie = () => {
        setSerieOn(!serieOn)
    }

    return (
        <div>
            <button onClick={handleToggle} className="btnEjercicios">
                <div>{`${id}`}</div>
            </button>
            {ejercicioOn && (
                <div>
                    <div className={ejercicioOn ? (serieOn ? "dataSerie2" : "dataSerie") : ""}>
                        <div className="diaEstado">Día {`${estado}`}</div>
                        <button onClick={handleToggleOnSerie} className="btnOpcEjercicios btnSerie">
                            Series
                        </button>
                        <Counter id={id} estado={estado} />
                    </div>
                   {(serieOn) && (<Series id={id} estado={estado} />)}
                </div>

            )}
        </div>
    );
};

export default Ejercicio;