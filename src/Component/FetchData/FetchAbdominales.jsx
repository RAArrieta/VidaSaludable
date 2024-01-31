import data from "../Firebase/Config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const FetchAbdominales = () => {
  const [serieAbd, setSerieAbd] = useState([]);

  useEffect(() => {
    const serieAbdRef = collection(data, "Abdominales");
    getDocs(serieAbdRef).then((resp) => {
      const serieAbdData = resp.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSerieAbd(serieAbdData);
    });
  }, []);

  return serieAbd;
};

export default FetchAbdominales;
