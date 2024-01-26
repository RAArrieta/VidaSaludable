import { useState } from "react";
import ModificarDia from "./ModificarDia";
import Guarnicion from "./Guarnicion";


const Modificar = ({ comidaSemanal, setComidaSemanal, modificarOn, guarnicionOn }) => {
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('');

    const handleSelectChange = (event) => {
        setOpcionSeleccionada(event.target.value);
    };

    return (
        <div>
            <select className='selectAliment' id="miSelect" value={opcionSeleccionada} onChange={handleSelectChange}>
                <option value="">Selcciona un día</option>
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miercoles">Miercoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
                <option value="Sabado">Sabado</option>
            </select>

            {(opcionSeleccionada && modificarOn) && <ModificarDia opcionSeleccionada={opcionSeleccionada} setOpcionSeleccionada={setOpcionSeleccionada} comidaSemanal={comidaSemanal} setComidaSemanal={setComidaSemanal} />}
            {(opcionSeleccionada && guarnicionOn) && <Guarnicion opcionSeleccionada={opcionSeleccionada} setOpcionSeleccionada={setOpcionSeleccionada} comidaSemanal={comidaSemanal} setComidaSemanal={setComidaSemanal} />}
        </div>
    );
}

export default Modificar
