import { useContext } from "react";
import { DataContext } from "../../Component/DataContext/DataContext";

const OpcionesSeguimiento = ({ seguimientoOn }) => {

    const { seguimiento } = useContext(DataContext);

    console.log("estoy en OpcionesSeguimiento")
    console.log(seguimiento[seguimiento.length - 1].id)

    const btnBackSeguimiento = () => {
        console.log("btnBackSeguimiento")
        //desde aqui quiero modificar seguimientoActual a la posicion anterior
    }
    const btnUpSeguimiento = () => {
        console.log("btnUpSeguimiento")
        //desde aqui quiero modificar seguimientoActual a la posicion anterior
    }
    const btnCargarSeguimiento = () => {
        console.log("btnCargarSeguimiento")
    }

    return (
        <>
            {
                seguimientoOn &&
                <div className="dataSeguimiento">
                    <button className="btnOpcSeguimiento" onClick={btnBackSeguimiento}>Back</button>
                    <button className="btnOpcSeguimiento" onClick={btnUpSeguimiento}>Up</button>
                    <button className="btnOpcSeguimiento" onClick={btnCargarSeguimiento}>Cargar</button>
                </div>
            }
        </>
    )
}

export default OpcionesSeguimiento









// import React, { useContext } from "react";
// import { DataContext } from "../../Component/DataContext/DataContext";

// const OpcionesSeguimiento = ({ seguimientoOn, setSeguimientoActual, seguimientoIndex }) => {
//   const { seguimiento } = useContext(DataContext);

//   const btnBackSeguimiento = () => {
//     if (seguimientoIndex > 0) {
//       setSeguimientoActual(seguimientoIndex - 1);
//     }
//   };

//   const btnUpSeguimiento = () => {
//     if (seguimientoIndex < seguimiento.length - 1) {
//       setSeguimientoActual(seguimientoIndex + 1);
//     }
//   };

//   const btnCargarSeguimiento = () => {
//     console.log("btnCargarSeguimiento");
//   };

//   return (
//     <>
//       {seguimientoOn && (
//         <div className="dataSeguimiento">
//           <button className="btnOpcSeguimiento" onClick={btnBackSeguimiento}>
//             Back
//           </button>
//           <button className="btnOpcSeguimiento" onClick={btnUpSeguimiento}>
//             Up
//           </button>
//           <button className="btnOpcSeguimiento" onClick={btnCargarSeguimiento}>
//             Cargar
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default OpcionesSeguimiento;
