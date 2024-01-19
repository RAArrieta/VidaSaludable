import React, { useContext, useState } from 'react'
import { DataContext } from '../../Component/DataContext/DataContext'

const DetalleSeguimiento = () => {

    const { seguimiento } = useContext(DataContext);
    const [seguimientoActual, setSeguimientoActual] = useState (seguimiento.length > 0 ? seguimiento[seguimiento.length - 1] : null)
    
    // const seguimientoActual = seguimiento.length > 0 ? seguimiento[seguimiento.length - 1] : null;

    const obtenerFecha = (timestamp) => {
        const fecha = timestamp.toDate();
        const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
        return fecha.toLocaleDateString('es-ES', opcionesFecha);
    };

    return (
        <div>
            {seguimientoActual && (
                <div className="cuadroSeguimientoActual">
                    <div className="tablaSeguimiento">{`Fecha: ${obtenerFecha(seguimientoActual.Fecha)}`}</div>
                    <div className="tablaSeguimiento">{`Peso: ${seguimientoActual.Peso}`}</div>
                    <div className="tablaSeguimiento">{`Pecho: ${seguimientoActual.Pecho}`}</div>
                    <div className="tablaSeguimiento">{`Cintura: ${seguimientoActual.Cintura}`}</div>
                    <div className="tablaSeguimiento">{`Cadera: ${seguimientoActual.Cadera}`}</div>
                </div>
            )}
        </div>
    )
}

export default DetalleSeguimiento









// import React, { useContext, useEffect, useState } from 'react';
// import { DataContext } from '../../Component/DataContext/DataContext';

// const DetalleSeguimiento = ({ seguimientoOn, seguimientoIndex }) => {
//   const { seguimiento } = useContext(DataContext);
//   const [seguimientoActual, setSeguimientoActual] = useState(null);

//   useEffect(() => {
//     if (seguimientoOn && seguimiento.length > 0) {
//       setSeguimientoActual(seguimiento[seguimientoIndex]);
//     } else {
//       setSeguimientoActual(null);
//     }
//   }, [seguimiento, seguimientoOn, seguimientoIndex]);

//   const obtenerFecha = (timestamp) => {
//     const fecha = timestamp.toDate();
//     const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
//     return fecha.toLocaleDateString('es-ES', opcionesFecha);
//   };

//   return (
//     <div>
//       {seguimientoActual && (
//         <div className="cuadroSeguimientoActual">
//           <div className="tablaSeguimiento">{`Fecha: ${obtenerFecha(seguimientoActual.Fecha)}`}</div>
//           <div className="tablaSeguimiento">{`Peso: ${seguimientoActual.Peso}`}</div>
//           <div className="tablaSeguimiento">{`Pecho: ${seguimientoActual.Pecho}`}</div>
//           <div className="tablaSeguimiento">{`Cintura: ${seguimientoActual.Cintura}`}</div>
//           <div className="tablaSeguimiento">{`Cadera: ${seguimientoActual.Cadera}`}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DetalleSeguimiento;
