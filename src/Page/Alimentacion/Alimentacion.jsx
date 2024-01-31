import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Component/DataContext/DataContext";
import OpcionsSelect from "../../Component/Alimentacion/OpcionsSelect";
import ComidaSemanal from "../../Component/Alimentacion/ComidaSemanal";
import DetalleAlimentos from "../../Component/Alimentacion/DetalleAlimentos";

const Alimentacion = () => {
  // traigo semanaAlimen que son todas las planillas de comidas de la semana
  const { semanaAlimen } = useContext(DataContext);
  // con semanaActual muestro la ultima planilla de comidas semanal
  const [semanaActual, setSemanaActual] = useState(
    semanaAlimen[semanaAlimen.length - 1]
  );
  // con variableOn controlo el despliegue de nuevos containers
  const [optionSelectOn, setOptionSelectOn] = useState(false);
  const [newSemanaOn, setNewSemanaOn] = useState(false);

  // si se actualiza semanaAlimen este useEffect actualiza semanaActual con el ultimo de semanaAlimen
  useEffect(() => {
    setSemanaActual(
      semanaAlimen.length > 0 ? semanaAlimen[semanaAlimen.length - 1] : null
    );
  }, [semanaAlimen]);

  return (
    <div className="fondo">
      <div className="flex_container_opciones">
        {/* despliega el container para cargar una nueva tabla semanal de alimentos */}
        <button
          className="btnPrincipal"
          onClick={() => setOptionSelectOn(!optionSelectOn)}
        >
          Comida semanal
        </button>
        
        {optionSelectOn && (
          <OpcionsSelect
            semanaAlimen={semanaAlimen}
            semanaActual={semanaActual}
            setSemanaActual={setSemanaActual}
            newSemanaOn={newSemanaOn}
            setNewSemanaOn={setNewSemanaOn}
          />
        )}
        {newSemanaOn && (
          <ComidaSemanal
            semanaActual={semanaActual}
            newSemanaOn={newSemanaOn}
            setNewSemanaOn={setNewSemanaOn}
          />
        )}
        <DetalleAlimentos semanaActual={semanaActual} setSemanaActual={setSemanaActual} />
      </div>
    </div>
  );
};

export default Alimentacion;
