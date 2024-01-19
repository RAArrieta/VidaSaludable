import "./Seguimiento.css";
import { useState } from "react";
import DetalleSeguimiento from "./DetalleSeguimiento";
import OpcionesSeguimiento from "./OpcionesSeguimiento";

const Seguimiento = () => {

  const [seguimientoOn, setSeguimientoOn] = useState(false);

  const handleOpcSeguimiento = () => {
    setSeguimientoOn(!seguimientoOn)
  }

  return (
    <div className="seguimiento">
      <button className="btnSeguimiento" onClick={handleOpcSeguimiento}>
        <div>Seguimiento</div>
      </button>
      <OpcionesSeguimiento seguimientoOn={seguimientoOn} />
      <DetalleSeguimiento />
    </div>
  );
};

export default Seguimiento









// import React, { useState } from "react";
// import DetalleSeguimiento from "./DetalleSeguimiento";
// import OpcionesSeguimiento from "./OpcionesSeguimiento";

// import "./Seguimiento.css"; // Asegúrate de importar los estilos

// const Seguimiento = () => {
//   const [seguimientoOn, setSeguimientoOn] = useState(false);

//   return (
//     <div className="seguimiento-container"> {/* Asegúrate de que la clase sea correcta */}
//       <button className="btnSeguimiento" onClick={() => setSeguimientoOn(!seguimientoOn)}>
//         <div>Seguimiento</div>
//       </button>
//       <OpcionesSeguimiento seguimientoOn={seguimientoOn} />
//       <DetalleSeguimiento seguimientoOn={seguimientoOn} />
//     </div>
//   );
// };

// export default Seguimiento;




