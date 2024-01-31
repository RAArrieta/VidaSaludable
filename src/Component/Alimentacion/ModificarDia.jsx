import { useContext, useState, useEffect } from "react";
import { DataContext } from "../DataContext/DataContext";

const ModificarDia = ({
  opcionSeleccionada,
  comidaSemanal,
  setComidaSemanal,
  setModificarOn,
}) => {
  const { alimentos } = useContext(DataContext);
  const [opcionesAlimento, setOpcionesAlimento] = useState({});

  useEffect(() => {
    let nuevoAlimento = {};

    if (opcionSeleccionada === "Lunes") {
      nuevoAlimento = { ...alimentos[7] };
    } else if (opcionSeleccionada === "Martes") {
      nuevoAlimento = { ...alimentos[6] };
    } else if (opcionSeleccionada === "Miercoles") {
      nuevoAlimento = { ...alimentos[0] };
    } else if (opcionSeleccionada === "Jueves") {
      nuevoAlimento = { ...alimentos[5] };
    } else if (opcionSeleccionada === "Viernes") {
      nuevoAlimento = { ...alimentos[3] };
    } else if (opcionSeleccionada === "Sabado") {
      nuevoAlimento = { ...alimentos[6] };
    }

    setOpcionesAlimento((prevOpcionesAlimento) => ({
      ...prevOpcionesAlimento,
      [opcionSeleccionada]: nuevoAlimento,
    }));
  }, [opcionSeleccionada, alimentos, setModificarOn]);

  const handleSelectChange = (event) => {
    const seleccion = event.target.value;
    setComidaSemanal((prevComidaSemanal) => ({
      ...prevComidaSemanal,
      [opcionSeleccionada]: seleccion,
    }));
  };

  return (
    <div>
      <select
        className="selectAliment"
        id="miSelect"
        value={comidaSemanal[opcionSeleccionada] || ""}
        onChange={handleSelectChange}
      >
        <option value="">Selecciona..</option>
        {Object.values(opcionesAlimento[opcionSeleccionada] || {}).map(
          (alimento, index) => (
            <option key={index} value={alimento}>
              {alimento}
            </option>
          )
        )}
      </select>
    </div>
  );
};

export default ModificarDia;