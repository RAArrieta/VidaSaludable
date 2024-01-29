import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Component/DataContext/DataContext";
import OpcionsSelect from "../../Component/Alimentacion/OpcionsSelect";
import ComidaSemanal from "../../Component/Alimentacion/ComidaSemanal";
import DetalleAlimentos from "../../Component/Alimentacion/DetalleAlimentos";

const Alimentacion = () => {

  const { semanaAlimen } = useContext(DataContext)
  const [semanaActual, setSemanaActual] = useState(semanaAlimen[semanaAlimen.length - 1])
  const [optionSelectOn, setOptionSelectOn] = useState(false);
  const [newSemanaOn, setNewSemanaOn] = useState(false)

  useEffect(() => {
    setSemanaActual(semanaAlimen.length > 0 ? semanaAlimen[semanaAlimen.length - 1] : null);
  }, [semanaAlimen]);

  return (
    <div className="fondo">
      <div className="flex_container_opciones">
        <button className="btnPrincipal" onClick={() => setOptionSelectOn(!optionSelectOn)}>Comida semanal</button>
        {optionSelectOn && <OpcionsSelect semanaAlimen={semanaAlimen} semanaActual={semanaActual} setSemanaActual={setSemanaActual} newSemanaOn={newSemanaOn} setNewSemanaOn={setNewSemanaOn} />}
        {newSemanaOn && <ComidaSemanal semanaActual={semanaActual} newSemanaOn={newSemanaOn} setNewSemanaOn={setNewSemanaOn} />}
        <DetalleAlimentos semanaActual={semanaActual} />
      </div>
    </div>

  )
}

export default Alimentacion
