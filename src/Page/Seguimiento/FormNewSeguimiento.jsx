import { doc, getFirestore, serverTimestamp, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { DataContext } from "../../Component/DataContext/DataContext";

const FormNewSeguimiento = ({ formOn, setFormOn, setSeguimientoActual }) => {

  const { seguimiento } = useContext(DataContext);

  const { register, handleSubmit } = useForm();

  const enviar = async (newSeguimiento) => {
    try {
      const nuevoId = seguimiento.length > 0 ? (Number(seguimiento[seguimiento.length - 1].id) + 1).toString().padStart(3, '0') : 1

      const data = getFirestore();

      const seguimientoConFecha = {
        ...newSeguimiento,
        Fecha: serverTimestamp(),
      };

      // Crear una referencia al documento con el ID deseado
      const seguimientoDocRef = doc(data, "Seguimiento", nuevoId.toString());

      // Establecer el documento con los datos
      await setDoc(seguimientoDocRef, seguimientoConFecha);

      console.log("Datos enviados a Firebase correctamente");
      setFormOn(!formOn);

    } catch (error) {
      console.error("Error al enviar datos a Firebase:", error);
    }
  };

  return (
    <form className="formNewSeguimiento" onSubmit={handleSubmit(enviar)}>


      <input type="text" placeholder="Ingrese su peso..." {...register("Peso")} required />
      <input type="text" placeholder="Medida de pecho..." {...register("Pecho")} required />
      <input type="text" placeholder="Medida de cintura..." {...register("Cintura")} required />
      <input type="text" placeholder="Medida de cadera..." {...register("Cadera")} required />

      <button type="submit">Ingresar</button>

    </form>
  )
}

export default FormNewSeguimiento
