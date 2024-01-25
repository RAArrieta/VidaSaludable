import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../Component/DataContext/DataContext';

const ModificarDia = ({ opcionSeleccionada, setOpcionSeleccionada, comidaSemanal, setComidaSemanal, setModificarOn }) => {
    const { alimentos } = useContext(DataContext);
    const [opcionesAlimento, setOpcionesAlimento] = useState({});

    useEffect(() => {
        let nuevoAlimento = {};

        if (opcionSeleccionada === "Lunes") {
            nuevoAlimento = { ...alimentos[7] };
        } else if (opcionSeleccionada === "Martes") {
            nuevoAlimento = { ...alimentos[6] };
        } else if (opcionSeleccionada === "Miercoles") {
            nuevoAlimento = { ...alimentos[0] };
        } else if (opcionSeleccionada === "Jueves") {
            nuevoAlimento = { ...alimentos[5] };
        } else if (opcionSeleccionada === "Viernes") {
            nuevoAlimento = { ...alimentos[3] };
        } else if (opcionSeleccionada === "Sabado") {
            nuevoAlimento = { ...alimentos[6] };
        }

        setOpcionesAlimento(prevOpcionesAlimento => ({
            ...prevOpcionesAlimento,
            [opcionSeleccionada]: nuevoAlimento
        }));
    }, [opcionSeleccionada, alimentos, setModificarOn]);

    const handleSelectChange = (event) => {
        const seleccion = event.target.value;
        setComidaSemanal(prevComidaSemanal => ({
            ...prevComidaSemanal,
            [opcionSeleccionada]: seleccion
        }));
    };

    return (
        <div>
            <select id="miSelect" value={comidaSemanal[opcionSeleccionada] || ''} onChange={handleSelectChange}>
                <option value="">Selecciona..</option>
                {Object.values(opcionesAlimento[opcionSeleccionada] || {}).map((alimento, index) => (
                    <option key={index} value={alimento}>
                        {alimento}
                    </option>
                ))}
            </select>

            <p>Selecciono: {comidaSemanal[opcionSeleccionada]} para el {opcionSeleccionada}</p>
        </div>
    );
};

export default ModificarDia;




















// import React, { useContext, useState, useEffect } from 'react';
// import { DataContext } from '../../Component/DataContext/DataContext';

// const ModificarDia = ({ opcionSeleccionada, setOpcionSeleccionada, comidaSemanal, setComidaSemanal, setModificarOn }) => {
//     const { alimentos } = useContext(DataContext);
//     const [opcModAlimento, setOpcModAlimento] = useState({});
//     const [opcionAlimenSelect, setOpcionAlimenSelect] = useState('');

//     useEffect(() => {
//         if (opcionSeleccionada === "Lunes") {
//             setOpcModAlimento(alimentos[7]);
//         } else if (opcionSeleccionada === "Martes") {
//             setOpcModAlimento(alimentos[6]);
//         } else if (opcionSeleccionada === "Miercoles") {
//             setOpcModAlimento(alimentos[0]);
//         } else if (opcionSeleccionada === "Jueves") {
//             setOpcModAlimento(alimentos[5]);
//         } else if (opcionSeleccionada === "Viernes") {
//             setOpcModAlimento(alimentos[3]);
//         } else if (opcionSeleccionada === "Sabado") {
//             setOpcModAlimento(alimentos[6]);
//         }
//     }, [opcionSeleccionada, alimentos, setModificarOn]);

//     const handleSelectChange = (event) => {
//         setOpcionAlimenSelect(event.target.value);
//     };

//     useEffect(() => {
//         if (opcionAlimenSelect !== '') {
//             setComidaSemanal(prevComidaSemanal => ({
//                 ...prevComidaSemanal,
//                 [opcionSeleccionada]: opcionAlimenSelect
//             }));
//         }
//     }, [opcionAlimenSelect, opcionSeleccionada, setComidaSemanal]);

//     return (
//         <div>
//             <select id="miSelect" value={opcionAlimenSelect} onChange={handleSelectChange}>
//                 <option value="">Selecciona..</option>
//                 {Object.values(opcModAlimento).map((alimento, index) => (
//                     <option key={index} value={alimento}>
//                         {alimento}
//                     </option>
//                 ))}
//             </select>

//             <p>Selecciono: {opcionAlimenSelect} para el {opcionSeleccionada}</p>
//         </div>
//     );
// };

// export default ModificarDia;


