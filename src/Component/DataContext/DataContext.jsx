import { createContext } from "react";
import FetchEjercicios from "../FetchData/FetchEjercicios";
import FetchSeguimiento from "../FetchData/FetchSeguiento";
import FetchCorrer from "../FetchData/FetchCorrer";
import FetchAbdominales from "../FetchData/FetchAbdominales";
import FetchFlexiones from "../FetchData/FetchFlexiones";
import FetchSentadillas from "../FetchData/FetchSentadillas";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const ejercicios = FetchEjercicios();
    const seguimiento = FetchSeguimiento();

    // EJERCICIOS
    const serieCorrer = FetchCorrer();
    const serieAbd = FetchAbdominales();
    const serieFlex = FetchFlexiones();
    const serieSent = FetchSentadillas();

    return (
        <DataContext.Provider value={{ ejercicios, seguimiento, serieCorrer, serieAbd, serieFlex, serieSent }}>
            {children}
        </DataContext.Provider>
    )
}