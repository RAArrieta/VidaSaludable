import data from "../Firebase/Config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const FetchFlexiones = () => {
  const [serieFlex, setSerieFlex] = useState([]);

  useEffect(() => {
    const serieFlexRef = collection(data, "Flexiones y Glute Bridge");
    getDocs(serieFlexRef).then((resp) => {
      const serieFlexData = resp.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSerieFlex(serieFlexData);
    });
  }, []);

  return serieFlex;
};

export default FetchFlexiones;
