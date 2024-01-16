import Ejercicio from "./Ejercicio";
import data from "../../Firebase/Config";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";

const Ejercicios = () => {
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    const ejerciciosRef = collection(data, "Ejercicios");
    getDocs(ejerciciosRef).then((resp) => {
      const ejerciciosData = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setEjercicios(ejerciciosData);
    });
  }, []);

  return (
    <div className="ejercicios">
      {ejercicios.map((ejercicio) => (
        <Ejercicio
          key={ejercicio.id}
          id={ejercicio.id}
          estado={ejercicio.estado}
          ejercicio = {ejercicio}
          // onSerie={() => console.log(`Ver Series ${ejercicio.estado}`)}
          // onAddId={() => console.log(`Sumar Id ${ejercicio.estado}`)}
          // onSubstractId={() => console.log(`Restar Id ${ejercicio.estado}`)}
        />
      ))}
    </div>
  );
};

export default Ejercicios;


// import "./Ejercicios.css"
// import imgRun from "./img/corriendo.png";
// import imgFlex from "./img/flexiones.png";
// import imgSent from "./img/sentadilla.png";
// import imgAbd from "./img/abdominales.png";
// import data from "../../Firebase/Config";
// import { collection, getDocs,doc, updateDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";

// const Ejercicios = () => {

//   //TRAIGO LOS DATOS DE EJERCICIOS
//   const [ejercicios, setEjercicios] = useState([]);
//   useEffect(() => {
//     const ejerciciosRef = collection(data, "Ejercicios");

//     getDocs(ejerciciosRef)
//       .then((resp) => {
//         setEjercicios(
//           resp.docs.map((doc) => {
//             return { ...doc.data(), id: doc.id }
//           })
//         )
//       })
//   }, [])

//   const [stateCorrer, setStateCorrer] = useState(ejercicios.length > 1 ? ejercicios[1].estado : 0)
//   // const [stateFlex, setStateFlex] = useState (ejercicios[2])
//   // const [stateSent, setStateSent] = useState (ejercicios[4])
//   // const [stateAbd, setStateAbd] = useState (ejercicios[0])

//   // BOTONES DE DISTINTOS EJERCICIOS
//   // ***CORRER***
//   const [correrOn, setCorrerOn] = useState(false);
//   const handleCorrer = () => {
//     setCorrerOn(!correrOn);
//   }
//   const handleSerieCorrer = () => {
//     console.log("Ver Series Correr")
//   }
//   // const handleAddCorrerId = () => {
//   //   setStateCorrer((stateCorrer === 0) ? ejercicios[1].estado + 1 : stateCorrer + 1)
//   //   console.log(stateCorrer)
//   // }
//   const handleSubstractCorrerId = () => {
//     setStateCorrer((stateCorrer === 0) ? ejercicios[1].estado - 1 : stateCorrer - 1)
//     console.log(stateCorrer)
//   }
//   const handleAddCorrerId = async () => {
//     try {
//       // Incrementar stateCorrer localmente
//       setStateCorrer((prevCorrer) => prevCorrer + 1);

//       // Obtener el ID del primer ejercicio (o el que necesites)
//       const ejercicioId = ejercicios.length > 0 ? ejercicios[1].id : null;

//       if (ejercicioId) {
//         // Actualizar estado en Firestore
//         const ejerciciosRef = doc(data, "Ejercicios", ejercicioId);
//         await updateDoc(ejerciciosRef, { estado: stateCorrer });
//         console.log("Estado actualizado en Firebase");
//       } else {
//         console.error("No hay ejercicios para actualizar en Firebase");
//       }
//     } catch (error) {
//       console.error("Error al actualizar el estado en Firebase", error);
//     }
//   };

//   // ***FLEXIONES***
//   const [flexOn, setFlexOn] = useState(false);
//   const handleFlex = () => {
//     setFlexOn(!flexOn);
//   }
//   const handleSerieFlex = () => {
//     console.log("Ver Series Flexiones")
//   }
//   const handleAddFlexId = () => {
//     console.log("Sumar Id Flexiones")
//   }
//   const handleSubstractFlexId = () => {
//     console.log("Restar Id Flexiones")
//   }
//   // ***SENTADILLAS***
//   const [sentOn, setSentOn] = useState(false);
//   const handleSent = () => {
//     setSentOn(!sentOn);
//   }
//   const handleSerieSent = () => {
//     console.log("Ver Series Sentadillas")
//   }
//   const handleAddSentId = () => {
//     console.log("Sumar Id Sentadillas")
//   }
//   const handleSubstractSentId = () => {
//     console.log("Restar Id Sentadillas")
//   }
//   // ***ABDOMINALES***
//   const [abdOn, setAbdOn] = useState(false);
//   const handleAbd = () => {
//     setAbdOn(!abdOn);
//   }
//   const handleSerieAbd = () => {
//     console.log("Ver Series Abdominales")
//   }
//   const handleAddAbdId = () => {
//     console.log("Sumar Id Abdominales")
//   }
//   const handleSubstractAbdId = () => {
//     console.log("Restar Id Abdominales")
//   }

//   return (
//     <div className="ejercicios">
//       <button onClick={handleCorrer} className="btnEjercicios">
//         <img src={imgRun} alt="Logo Runing" width="70px" height="70px" />
//         <div>Correr</div>
//       </button>
//       {(correrOn) && (
//         <div className={correrOn ? "dataSerie" : ""}>
//           <div>Día {`${ejercicios[1].estado}`}</div>
//           <button onClick={handleSerieCorrer} className="btnOpcEjercicios">Series</button>
//           <button onClick={handleAddCorrerId} className="btnOpcEjercicios">Ok</button>
//           <button onClick={handleSubstractCorrerId} className="btnOpcEjercicios">Volver</button>
//         </div>
//       )}

//       <button onClick={handleFlex} className="btnEjercicios">
//         <img src={imgFlex} alt="Logo Runing" width="70px" height="70px" />
//         <div>Flexiones</div>
//       </button>
//       {(flexOn) && (
//         <div className={flexOn ? "dataSerie" : ""}>
//           <div>Día {`${ejercicios[2].estado}`}</div>
//           <button onClick={handleSerieFlex} className="btnOpcEjercicios">Series</button>
//           <button onClick={handleAddFlexId} className="btnOpcEjercicios">Ok</button>
//           <button onClick={handleSubstractFlexId} className="btnOpcEjercicios">Volver</button>
//         </div>
//       )}

//       <button onClick={handleSent} className="btnEjercicios">
//         <img src={imgSent} alt="Logo Runing" width="70px" height="70px" />
//         <div>Sentadillas</div>
//       </button>
//       {(sentOn) && (
//         <div className={sentOn ? "dataSerie" : ""}>
//           <div>Día {`${ejercicios[3].estado}`}</div>
//           <button onClick={handleSerieSent} className="btnOpcEjercicios">Series</button>
//           <button onClick={handleAddSentId} className="btnOpcEjercicios">Ok</button>
//           <button onClick={handleSubstractSentId} className="btnOpcEjercicios">Volver</button>
//         </div>
//       )}

//       <button onClick={handleAbd} className="btnEjercicios">
//         <img src={imgAbd} alt="Logo Runing" width="70px" height="70px" />
//         <div>Abdominales</div>
//       </button>
//       {(abdOn) && (
//         <div className={abdOn ? "dataSerie" : ""}>
//           <div>Día {`${ejercicios[0].estado}`}</div>
//           <button onClick={handleSerieAbd} className="btnOpcEjercicios">Series</button>
//           <button onClick={handleAddAbdId} className="btnOpcEjercicios">Ok</button>
//           <button onClick={handleSubstractAbdId} className="btnOpcEjercicios">Volver</button>
//         </div>
//       )}

//     </div>
//   );
// }

// export default Ejercicios
