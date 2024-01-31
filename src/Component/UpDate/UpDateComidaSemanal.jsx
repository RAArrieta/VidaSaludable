import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import data from "../Firebase/Config";

const UpDateComidaSemanal = ({
  idcomidaSemanal,
  comidaSemanal,
  setNewSemanaOn,
  newSemanaOn,
  setSemanaAlimen,
}) => {

  const aceptarSemana = async ()=>{
    try {
      const semanaAlimenRef = collection(data, "SemanaAlimen");
      const docRef = doc(semanaAlimenRef, idcomidaSemanal.toString());
      await setDoc(docRef, comidaSemanal);

      getDocs(semanaAlimenRef).then((resp) => {
        const semanaAlimenData = resp.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setSemanaAlimen(semanaAlimenData);
      });

      setNewSemanaOn(!newSemanaOn);
      console.log("Documento añadido con ID personalizado: ", idcomidaSemanal);
    } catch (error) {
      console.error("Error al añadir documento: ", error);
    }
  }

  return (
    <button className="btn_container_opciones" onClick={aceptarSemana}>
      Aceptar
    </button>
  );
};

export default UpDateComidaSemanal;