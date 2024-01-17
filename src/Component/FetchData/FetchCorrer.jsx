import data from "../Firebase/Config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const FetchCorrer = () => {

    const [serieCorrer, setserieCorrer] = useState([]);

    useEffect(() => {
        const serieCorrerRef = collection(data, "Correr");
        getDocs(serieCorrerRef).then((resp) => {
            const serieCorrerData = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setserieCorrer(serieCorrerData);
        });
    }, []);

  return serieCorrer;
}

export default FetchCorrer