import Counter from "../../Component/Counter/Counter";
import "./Ejercicios.css"
import { useState } from "react";
import Series from "./Series";

const Ejercicio = ({ id, estado }) => {
    const [ejercicioOn, setEjercicioOn] = useState(false);
    const [serieOn, setSerieOn] = useState(false);
    const [estadoContador, setEstadoContador] = useState(estado);

    const handleToggle = () => {
        setEjercicioOn(!ejercicioOn);
    };

    const handleToggleOnSerie = () => {
        setSerieOn(!serieOn)
    }

    const handleCounterChange = (newState) => {
        setEstadoContador(newState);
      };

    return (
        <div>
            <button onClick={handleToggle} className="btnEjercicios">
                <div>{`${id}`}</div>
            </button>
            {ejercicioOn && (
                <div>
                    <div className={ejercicioOn ? (serieOn ? "dataSerie2" : "dataSerie") : ""}>
                        <div className="diaEstado">Día {`${estadoContador}`}</div>
                        <button onClick={handleToggleOnSerie} className="btnOpcEjercicios btnSerie">
                            Series
                        </button>
                        <Counter id={id} estadoContador={estadoContador} onCounterChange={handleCounterChange} />
                    </div>
                   {(serieOn) && (<Series id={id} estadoContador={estadoContador} />)}
                </div>

            )}
        </div>
    );
};

export default Ejercicio;