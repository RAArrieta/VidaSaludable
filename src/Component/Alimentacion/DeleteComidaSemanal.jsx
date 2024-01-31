import { useContext } from "react";
import { DataContext } from "../DataContext/DataContext";
import { deleteDoc, doc } from "firebase/firestore";
import data from "../Firebase/Config";

const DeleteComidaSemanal = ({ semanaActual }) => {
  const { semanaAlimen, setSemanaAlimen } = useContext(DataContext);

  const handleDeleteComidaSemanal = async () => {
    try {
      const index =
        semanaAlimen && semanaAlimen.findIndex((el) => el.id === semanaActual.id);
      const deleteId = semanaAlimen[index].id;

      // Obtén una referencia al documento que deseas eliminar
      const docRef = doc(data, "SemanaAlimen", deleteId);

      // Elimina el documento de la base de datos
      await deleteDoc(docRef);

      // Actualiza el estado local eliminando el elemento correspondiente
      setSemanaAlimen((prevSemanaAlimen) =>
        prevSemanaAlimen.filter((el) => el.id !== deleteId)
      );

      console.log("Documento eliminado correctamente");
    } catch (error) {
      console.error("Error al eliminar el documento", error);
    }
  };

  return (
    <div className="btnDelete">
      <button
        className="btn_container_opciones btnOpc"
        onClick={handleDeleteComidaSemanal}
      >
        Eliminar Lista
      </button>
    </div>
  );
};

export default DeleteComidaSemanal;