import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../Component/DataContext/DataContext";
import DetalleSeguimiento from "../../Component/Seguimiento/DetalleSeguimiento";
import OpcionesSeguimiento from "../../Component/Seguimiento/OpcionesSeguimiento";
import FormNewSeguimiento from "../../Component/Seguimiento/FormNewSeguimiento";

const Seguimiento = () => {
  const [seguimientoOn, setSeguimientoOn] = useState(false);
  const { seguimiento } = useContext(DataContext);
  const [formOn, setFormOn] = useState(false);

  const [seguimientoActual, setSeguimientoActual] = useState(null);

  useEffect(() => {
    setSeguimientoActual(
      seguimiento.length > 0 ? seguimiento[seguimiento.length - 1] : null
    );
  }, [seguimiento]);

  return (
    <div className="fondo">
      <button
        className="btnPrincipal"
        onClick={() => setSeguimientoOn(!seguimientoOn)}
      >
        <div>Seguimiento</div>
      </button>
      <OpcionesSeguimiento
        seguimientoOn={seguimientoOn}
        seguimientoActual={seguimientoActual}
        setSeguimientoActual={setSeguimientoActual}
        formOn={formOn}
        setFormOn={setFormOn}
      />
      {formOn && (
        <FormNewSeguimiento
          formOn={formOn}
          setFormOn={setFormOn}
          setSeguimientoActual={setSeguimientoActual}
        />
      )}
      <DetalleSeguimiento seguimientoActual={seguimientoActual} />
    </div>
  );
};

export default Seguimiento;
