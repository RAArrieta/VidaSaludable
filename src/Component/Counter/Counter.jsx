import { useState } from "react"

const Counter = ({ estado }) => {

  const [state, setState] = useState(estado)

  const onAddId = () => {
    state < 4 && setState(state + 1)
  };

  const onSubstractId = () => {
    state > 1 && setState(state - 1)
  }

  return (
    <div>
      <button onClick={onAddId} className="btnOpcEjercicios btnOk">
        Ok
      </button>
      <button onClick={onSubstractId} className="btnOpcEjercicios btnBack">
        Back
      </button>
    </div>
  )
}

export default Counter;