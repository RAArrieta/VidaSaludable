import data from "../Firebase/Config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const FetchAlimentos = () => {

    const [alimentos, setAlimentos] = useState([]);

    useEffect(() => {
        const alimentosRef = collection(data, "Alimentación");
        getDocs(alimentosRef).then((resp) => {
            const alimentosData = resp.docs.map((doc) => ({ ...doc.data() }));
            setAlimentos(alimentosData);
        });
    }, []);

  return alimentos;
}

export default FetchAlimentos
