import { useContext, useEffect, useState } from "react"
import { DataContext } from "../../Component/DataContext/DataContext"


const Guarnicion = ({ opcionSeleccionada, comidaSemanal, setComidaSemanal, setOpcionSeleccionada}) => {

    const { alimentos } = useContext(DataContext)
    const [opcionGuarnicion, setOpcionGuarnicion] = useState("")

    const arrayGuarniciones = Object.values(alimentos[2]);

    const handleSelectChange = (event) => {
        setOpcionGuarnicion(event.target.value);
    };

    useEffect(() => {
        if (opcionSeleccionada && opcionGuarnicion !== "") {
            setComidaSemanal((prevComidaSemanal) => ({
                ...prevComidaSemanal,
                [opcionSeleccionada]: `${prevComidaSemanal[opcionSeleccionada]} con ${opcionGuarnicion}`,
            }));
            setOpcionSeleccionada("")
        }
    }, [opcionSeleccionada, opcionGuarnicion, setComidaSemanal, setOpcionSeleccionada]);

    return (
        <div>
            <select id="miSelect" value={opcionGuarnicion} onChange={handleSelectChange}>
                <option value="">Selecciona..</option>
                {arrayGuarniciones.map((guarnicion, index) => (
                    <option key={index} value={guarnicion}>
                        {guarnicion}
                    </option>
                ))}
            </select>

            <p>Selecciono: {opcionGuarnicion} para el {opcionSeleccionada}</p>
        </div>
    )
}

export default Guarnicion