import { useState } from "react";
import ModificarDia from "./ModificarDia";
import SelectGuarnicion from "./SelectGuarnicion";

const SelectDay = ({
  comidaSemanal,
  setComidaSemanal,
  modificarOn,
  guarnicionOn,
}) => {
    // opcionSeleccionada tomo el día a modificar
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("");

  const handleSelectChange = (event) => {
    setOpcionSeleccionada(event.target.value);
  };

  return (
    <div className="flex_select">
      <select
        className="selectAliment selectDay"
        id="miSelect"
        value={opcionSeleccionada}
        onChange={handleSelectChange}
      >
        <option value="">Selcciona un día</option>
        <option value="Lunes">Lunes</option>
        <option value="Martes">Martes</option>
        <option value="Miercoles">Miercoles</option>
        <option value="Jueves">Jueves</option>
        <option value="Viernes">Viernes</option>
        <option value="Sabado">Sabado</option>
      </select>

      {opcionSeleccionada && modificarOn && (
        <ModificarDia
          opcionSeleccionada={opcionSeleccionada}
          setOpcionSeleccionada={setOpcionSeleccionada}
          comidaSemanal={comidaSemanal}
          setComidaSemanal={setComidaSemanal}
        />
      )}
      {opcionSeleccionada && guarnicionOn && (
        <SelectGuarnicion
          opcionSeleccionada={opcionSeleccionada}
          setOpcionSeleccionada={setOpcionSeleccionada}
          comidaSemanal={comidaSemanal}
          setComidaSemanal={setComidaSemanal}
        />
      )}
    </div>
  );
};

export default SelectDay;
