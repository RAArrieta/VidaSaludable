import Ejercicio from "../../Component/Ejercicios/Ejercicio";
import { useContext } from "react";
import { DataContext } from "../../Component/DataContext/DataContext";

const Ejercicios = () => {
  // Llamo a ejercicios que son los tipos de ejercicios
  const { ejercicios } = useContext(DataContext);

  // Itero ejercicios para renderizarlo con Ejercicio
  return (
    <div className="fondo">
      {ejercicios.map((ejercicio) => (
        <Ejercicio
          key={ejercicio.id}
          id={ejercicio.id}
          estado={ejercicio.estado}
        />
      ))}
    </div>
  );
};

export default Ejercicios;
