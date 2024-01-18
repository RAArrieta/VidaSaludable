import data from "../Firebase/Config";
import { doc, updateDoc } from "firebase/firestore";

const UpDateState = async (id, newState) => {
    try {
        const newStateRef = doc(data, "Ejercicios", id);
        await updateDoc(newStateRef, { estado: newState });
        console.log("Estado actualizado en Firebase");
    } catch (error) {
        console.error("Error al actualizar el estado en Firebase", error);
    }
};

export default UpDateState
