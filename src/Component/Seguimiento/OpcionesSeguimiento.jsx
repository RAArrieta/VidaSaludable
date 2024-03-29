import { useContext } from "react";
import { DataContext } from "../DataContext/DataContext";

const OpcionesSeguimiento = ({
  seguimientoOn,
  seguimientoActual,
  setSeguimientoActual,
  formOn,
  setFormOn,
}) => {
  const { seguimiento } = useContext(DataContext);

  const index = seguimientoActual
    ? seguimiento.findIndex((el) => el.id === seguimientoActual.id)
    : -1;

  const btnBackSeguimiento = () => {
    if (seguimiento.length > 0 && index > 0) {
      setSeguimientoActual(seguimiento[index - 1]);
    }
  };
  const btnUpSeguimiento = () => {
    if (seguimiento.length > 0 && index < seguimiento.length - 1) {
      setSeguimientoActual(seguimiento[index + 1]);
    }
  };
  const btnCargarSeguimiento = () => {
    setFormOn(!formOn);
  };

  return (
    <>
      {seguimientoOn && (
        <div className="container_opciones">
          <button
            className="btn_container_opciones"
            onClick={btnBackSeguimiento}
          >
            Back
          </button>
          <button className="btn_container_opciones" onClick={btnUpSeguimiento}>
            Up
          </button>
          <button
            className="btn_container_opciones"
            onClick={btnCargarSeguimiento}
          >
            Cargar
          </button>
        </div>
      )}
    </>
  );
};

export default OpcionesSeguimiento;
