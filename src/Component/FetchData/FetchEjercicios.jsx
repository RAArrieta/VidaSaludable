import data from "../Firebase/Config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const FetchEjercicios = () => {
  const [ejercicios, setEjercicios] = useState([]);

  useEffect(() => {
    const ejerciciosRef = collection(data, "Ejercicios");
    getDocs(ejerciciosRef).then((resp) => {
      const ejerciciosData = resp.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (ejerciciosData.length > 0) {
        const primerEjercicio = ejerciciosData.shift();
        setEjercicios([...ejerciciosData, primerEjercicio]);
      } else {
        setEjercicios(ejerciciosData);
      }
    });
  }, []);

  return ejercicios;
};

export default FetchEjercicios;
