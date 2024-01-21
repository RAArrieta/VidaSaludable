import "./Seguimiento.css";
import { useContext, useEffect, useState } from "react";
import DetalleSeguimiento from "./DetalleSeguimiento";
import OpcionesSeguimiento from "./OpcionesSeguimiento";
import { DataContext } from "../../Component/DataContext/DataContext";
import FormNewSeguimiento from "./FormNewSeguimiento";

const Seguimiento = () => {

  const [seguimientoOn, setSeguimientoOn] = useState(false);
  const { seguimiento } = useContext(DataContext);
  const [formOn, setFormOn] = useState (false);

  const [seguimientoActual, setSeguimientoActual] = useState(null);

  useEffect(() => {
    setSeguimientoActual(seguimiento.length > 0 ? seguimiento[seguimiento.length - 1] : null);
  }, [seguimiento]);
  console.log(formOn)

  return (
    <div className="seguimiento">
      <button className="btnSeguimiento" onClick={() => setSeguimientoOn(!seguimientoOn)}>
        <div>Seguimiento</div>
      </button>
      <OpcionesSeguimiento seguimientoOn={seguimientoOn} seguimientoActual={seguimientoActual} setSeguimientoActual={setSeguimientoActual} formOn={formOn} setFormOn={setFormOn} />
      {formOn && <FormNewSeguimiento />}
      <DetalleSeguimiento seguimientoActual={seguimientoActual} />
    </div>
  );
};

export default Seguimiento