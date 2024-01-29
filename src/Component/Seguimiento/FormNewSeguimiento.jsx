import { collection, doc, getDocs, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../DataContext/DataContext";

const FormNewSeguimiento = ({ formOn, setFormOn }) => {

  const { seguimiento, setSeguimiento } = useContext(DataContext);

  const { register, handleSubmit } = useForm();

  const enviar = async (newSeguimiento) => {
    try {
      const nuevoId = seguimiento.length > 0 ? (Number(seguimiento[seguimiento.length - 1].id) + 1).toString().padStart(3, '0') : 1

      const data = getFirestore();

      const seguimientoConFecha = {
        ...newSeguimiento,
        Fecha: serverTimestamp(),
      };

      const seguimientoDocRef = doc(data, "Seguimiento", nuevoId.toString());

      await setDoc(seguimientoDocRef, seguimientoConFecha);

      console.log("Datos enviados a Firebase correctamente");
      setFormOn(!formOn);
      const seguimientoRef = collection(data, "Seguimiento");
      const updatedSeguimiento = await getDocs(seguimientoRef).then((resp) => {
        return resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      });
      setSeguimiento(updatedSeguimiento);


    } catch (error) {
      console.error("Error al enviar datos a Firebase:", error);
    }
  };

  return (
    <form className="formNewSeguimiento" onSubmit={handleSubmit(enviar)}>


      <input className="inputSeguimiento" type="text" placeholder="Ingrese su peso..." {...register("Peso")} required />
      <input className="inputSeguimiento" type="text" placeholder="Medida de pecho..." {...register("Pecho")} required />
      <input className="inputSeguimiento" type="text" placeholder="Medida de cintura..." {...register("Cintura")} required />
      <input className="inputSeguimiento" type="text" placeholder="Medida de cadera..." {...register("Cadera")} required />

      <button className="btn_container_opciones" type="submit">Ingresar</button>

    </form>
  )
}

export default FormNewSeguimiento
