import data from "../Firebase/Config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const FetchSeguimiento = () => {

    const [seguimiento, setSeguimiento] = useState([]);

    useEffect(() => {
        const seguimientoRef = collection(data, "Seguimiento");
        getDocs(seguimientoRef).then((resp) => {
            const seguimientoData = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setSeguimiento(seguimientoData)
        });
    }, []);

    return [seguimiento, setSeguimiento];
}

export default FetchSeguimiento