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
    <>
      <button onClick={onAddId} className="btnOpcEjercicios">
        Ok
      </button>
      <button onClick={onSubstractId} className="btnOpcEjercicios">
        Back
      </button>
    </>
  )
}

export default Counter;