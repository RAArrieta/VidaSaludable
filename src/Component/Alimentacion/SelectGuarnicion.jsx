import { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContext/DataContext";

const SelectGuarnicion = ({
  opcionSeleccionada,
  setComidaSemanal,
  setOpcionSeleccionada,
}) => {
  const { alimentos } = useContext(DataContext);
  const [opcionGuarnicion, setOpcionGuarnicion] = useState("");

  const arrayGuarniciones = Object.values(alimentos[2]);

  const handleSelectChange = (event) => {
    setOpcionGuarnicion(event.target.value);
  };

  useEffect(() => {
    if (opcionSeleccionada && opcionGuarnicion !== "") {
      setComidaSemanal((prevComidaSemanal) => ({
        ...prevComidaSemanal,
        [opcionSeleccionada]: `${prevComidaSemanal[opcionSeleccionada]} con ${opcionGuarnicion}`,
      }));
      setOpcionSeleccionada("");
    }
  }, [
    opcionSeleccionada,
    opcionGuarnicion,
    setComidaSemanal,
    setOpcionSeleccionada,
  ]);

  return (
    <div>
      <select
        className="selectAliment"
        id="miSelect"
        value={opcionGuarnicion}
        onChange={handleSelectChange}
      >
        <option value="">Selecciona..</option>
        {arrayGuarniciones.map((guarnicion, index) => (
          <option key={index} value={guarnicion}>
            {guarnicion}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectGuarnicion;
