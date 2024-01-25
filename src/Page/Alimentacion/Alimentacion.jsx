import { useContext, useEffect, useState } from "react"
import "./Alimentacion.css"
import OpcionesAlimentacion from "./OpcionesAlimentacion";
import { DataContext } from "../../Component/DataContext/DataContext";
import DetalleAlimentos from "./DetalleAlimentos";
import Almuerzos from "./Almuerzos";


const Alimentacion = () => {

  const { semanaAlimen } = useContext(DataContext)
  const [semanaActual, setSemanaActual] = useState(semanaAlimen[semanaAlimen.length - 1])
  const [comidaOn, setComidaOn] = useState(false);
  const [newSemanaOn, setNewSemanaOn]=useState(false)

  useEffect(() => {
    setSemanaActual(semanaAlimen.length > 0 ? semanaAlimen[semanaAlimen.length - 1] : null);
  }, [semanaAlimen]);

  return (
    <div className="alimentacion">
      <button className="btnComidaSemanal" onClick={() => setComidaOn(!comidaOn)}>Comida semanal</button>
      {comidaOn && <OpcionesAlimentacion semanaAlimen={semanaAlimen} semanaActual={semanaActual} setSemanaActual={setSemanaActual} newSemanaOn={newSemanaOn} setNewSemanaOn={setNewSemanaOn} />}
      {newSemanaOn && <Almuerzos semanaActual={semanaActual} newSemanaOn={newSemanaOn} setNewSemanaOn={setNewSemanaOn} />}
      <DetalleAlimentos semanaActual={semanaActual} />
      
    </div>

  )
}

export default Alimentacion
