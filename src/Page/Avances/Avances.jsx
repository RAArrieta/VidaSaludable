import { useContext } from "react";
import "./Avances.css";
import { DataContext } from "../../Component/DataContext/DataContext";

const Avances = () => {

  // const { stateAbd, stateCorrer, stateFlex, stateSent } = useContext(DataContext)
  const {ejercicios} = useContext(DataContext)
  console.log(ejercicios)

  return (
    <div className="avances">
      Avances
    </div>
  )
}

export default Avances
