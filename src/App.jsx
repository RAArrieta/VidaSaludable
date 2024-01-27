import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Page/Home/Home";
import Ejercicios from "./Page/Ejercicios/Ejercicios";
import Alimentacion from "./Page/Alimentacion/Alimentacion";
import Seguimiento from "./Page/Seguimiento/Seguimiento";
import { DataProvider } from "./Component/DataContext/DataContext";
import "./App.css";

function App() {
  return (
    <DataProvider>
      <BrowserRouter basename="/VidaSaludable">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ejercicios" element={<Ejercicios />} />
          <Route path="/alimentacion" element={<Alimentacion />} />
          <Route path="/seguimiento" element={<Seguimiento />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
