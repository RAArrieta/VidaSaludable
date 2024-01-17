import data from "../Firebase/Config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const FetchSentadillas = () => {

    const [serieSent, setSerieSent] = useState([]);

    useEffect(() => {
        const serieSentRef = collection(data, "Sentadillas y Estocadas");
        getDocs(serieSentRef).then((resp) => {
            const serieSentData = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            setSerieSent(serieSentData);
        });
    }, []);

  return serieSent;
}

export default FetchSentadillas