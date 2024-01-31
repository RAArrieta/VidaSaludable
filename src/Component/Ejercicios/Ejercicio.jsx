import { useState } from "react";
import Counter from "./Counter";
import Series from "./Series";

const Ejercicio = ({ id, estado }) => {
  // Las variablesOn son para desplegar o contraer un container nuevo
  const [ejercicioOn, setEjercicioOn] = useState(false);
  const [serieOn, setSerieOn] = useState(false);

  // estadoContador es la variable que maneja el día/estado de ejercicios que estamos
  const [estadoContador, setEstadoContador] = useState(estado);

  return (
    // Container de opciones
    <div className="flex_container_opciones">
      <button
        onClick={() => setEjercicioOn(!ejercicioOn)}
        className="btnPrincipal"
      >
        {/* id es el nombre del ejercicio */}
        <div>{`${id}`}</div>
      </button>
      {ejercicioOn && (
        <div>
          <div className="container_opciones">
            <div>Día {`${estadoContador}`}</div>
            {/* Este boton permite desplegar las series de los ejercicios */}
            <button
              onClick={() => setSerieOn(!serieOn)}
              className="btn_container_opciones"
            >
              Series
            </button>
            {/* Llamo a counter para pasar o retroceder días de ejecicios */}
            <Counter
              id={id}
              estadoContador={estadoContador}
              // onCounterChange es una funcion que actualiza el estadoContador
              onCounterChange={(newState) => setEstadoContador(newState)}
            />
          </div>
          {/* Si presiono el boton Series despliego la serie del día */}
          {serieOn && <Series id={id} estadoContador={estadoContador} />}
        </div>
      )}
    </div>
  );
};

export default Ejercicio;
