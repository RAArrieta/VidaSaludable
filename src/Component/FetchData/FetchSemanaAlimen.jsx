import data from "../Firebase/Config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const FetchSemanaAlimen = () => {

    const [semanaAlimen, setSemanaAlimen] = useState([]);

    useEffect(() => {
        const semanaAlimenRef = collection(data, "SemanaAlimen");
        getDocs(semanaAlimenRef).then((resp) => {
            const semanaAlimenData = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setSemanaAlimen(semanaAlimenData)
        });
    }, []);

    return [semanaAlimen, setSemanaAlimen];
}

export default FetchSemanaAlimen