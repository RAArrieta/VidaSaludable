import { useState } from "react"

const Counter = ({ejercicio}) => {

    const [state, setState]=useState (1)

    const onSerie = () => console.log(`Ver Series ${ejercicio.estado}`)
    const onAddId = () => console.log(state)
    const onSubstractId = () => console.log(`Restar Id ${ejercicio.estado}`)

    

    return (
        <div>
            <button onClick={onSerie} className="btnOpcEjercicios">
                Series
            </button>
            <button onClick={onAddId} className="btnOpcEjercicios">
                Ok
            </button>
            <button onClick={onSubstractId} className="btnOpcEjercicios">
                Volver
            </button>
        </div>
    )
}

export default Counter

