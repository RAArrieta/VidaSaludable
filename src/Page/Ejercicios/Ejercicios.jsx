import Ejercicio from "../../Component/Ejercicios/Ejercicio";
import { useContext } from "react";
import { DataContext } from "../../Component/DataContext/DataContext";

const Ejercicios = () => {

  const { ejercicios } = useContext(DataContext)

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