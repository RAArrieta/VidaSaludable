import { useContext, useEffect, useState } from "react"
import UpDateState from "../UpDate/UpDateState";
import { DataContext } from "../DataContext/DataContext";

const Counter = ({ id, estadoContador, onCounterChange }) => {

  const [newState, setNewState] = useState(estadoContador);
  const { serieCorrer, serieAbd, serieFlex, serieSent } = useContext(DataContext)

  const onAddId = () => {
    (id === "Correr" & newState < serieCorrer.length) && setNewState(newState + 1);
    (id === "Flexiones y Glute Bridge" & newState < serieFlex.length) && setNewState(newState + 1);
    (id === "Sentadillas y Estocadas" & newState < serieSent.length) && setNewState(newState + 1);
    (id === "Abdominales" & newState < serieAbd.length) && setNewState(newState + 1);
  };

  const onSubstractId = () => {
    newState > 1 && setNewState(newState - 1)
  }

  useEffect(() => {
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
  )
}

export default Counter;