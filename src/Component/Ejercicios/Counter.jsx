import { useContext, useEffect, useState } from "react";
import UpDateState from "../UpDate/UpDateState";
import { DataContext } from "../DataContext/DataContext";

// traigo id para encontrarlo en alguna de las cuatro Series, el estadoContador para pasar al día/estado siguiente o al anterior y la funcion onCounterChange es la que actualiza el estadoContador
const Counter = ({ id, estadoContador, onCounterChange }) => {
  // newState es la variable que va a modificar el estadoContador
  const [newState, setNewState] = useState(estadoContador);

  // traigo los cuatro tipo de series desde DataContext para no superar el largo de su array
  const { serieCorrer, serieAbd, serieFlex, serieSent } =
    useContext(DataContext);

  // onAddId es la funcion que agrega un día/estado
  const onAddId = () => {
    (id === "Correr") & (newState < serieCorrer.length) &&
      setNewState(newState + 1);
    (id === "Flexiones y Glute Bridge") & (newState < serieFlex.length) &&
      setNewState(newState + 1);
    (id === "Sentadillas y Estocadas") & (newState < serieSent.length) &&
      setNewState(newState + 1);
    (id === "Abdominales") & (newState < serieAbd.length) &&
      setNewState(newState + 1);
  };

  // onSubstractId es la funcion que resta un día/estado
  const onSubstractId = () => {
    newState > 1 && setNewState(newState - 1);
  };

  useEffect(() => {
    // UpDateState actualiza en firebase el día/estado
    UpDateState(id, newState);
    onCounterChange(newState);
  }, [id, newState, onCounterChange]);

  return (
    <>
      <button onClick={onSubstractId} className="btn_container_opciones">
        Back
      </button>
      <button onClick={onAddId} className="btn_container_opciones">
        Ok
      </button>
    </>
  );
};

export default Counter;
