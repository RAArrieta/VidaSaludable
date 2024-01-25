import { createContext } from "react";
import FetchEjercicios from "../FetchData/FetchEjercicios";
import FetchSeguimiento from "../FetchData/FetchSeguiento";
import FetchCorrer from "../FetchData/FetchCorrer";
import FetchAbdominales from "../FetchData/FetchAbdominales";
import FetchFlexiones from "../FetchData/FetchFlexiones";
import FetchSentadillas from "../FetchData/FetchSentadillas";
import FetchAlimentos from "../FetchData/FetchAlimentos";
import FetchSemanaAlimen from "../FetchData/FetchSemanaAlimen";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const ejercicios = FetchEjercicios();
    const alimentos = FetchAlimentos();
    const [seguimiento, setSeguimiento] = FetchSeguimiento();
    const [semanaAlimen, setSemanaAlimen] = FetchSemanaAlimen();

    // EJERCICIOS
    const serieCorrer = FetchCorrer();
    const serieAbd = FetchAbdominales();
    const serieFlex = FetchFlexiones();
    const serieSent = FetchSentadillas();

    return (
        <DataContext.Provider value={{ ejercicios, alimentos, setSeguimiento, seguimiento, serieCorrer, serieAbd, serieFlex, serieSent, semanaAlimen, setSemanaAlimen }}>
            {children}
        </DataContext.Provider>
    )
}