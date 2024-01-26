import { useState } from "react";
import Counter from "../Counter/Counter";
import Series from "./Series";

const Ejercicio = ({ id, estado }) => {
    const [ejercicioOn, setEjercicioOn] = useState(false);
    const [serieOn, setSerieOn] = useState(false);
    const [estadoContador, setEstadoContador] = useState(estado);

    return (
        <div>
            <button onClick={()=>setEjercicioOn(!ejercicioOn)} className="btnEjercicios">
                <div>{`${id}`}</div>
            </button>
            {ejercicioOn && (
                <div>
                    <div className={ejercicioOn ? (serieOn ? "dataSerie2" : "dataSerie") : ""}>
                        <div className="diaEstado">Día {`${estadoContador}`}</div>
                        <button onClick={()=>setSerieOn(!serieOn)} className="btnOpcEjercicios">
                            Series
                        </button>
                        <Counter id={id} estadoContador={estadoContador} onCounterChange={(newState) => setEstadoContador(newState)} />
                    </div>
                   {(serieOn) && (<Series id={id} estadoContador={estadoContador} />)}
                </div>

            )}
        </div>
    );
};

export default Ejercicio;