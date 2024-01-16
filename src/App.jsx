import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Home from "./Page/Home/Home";
import Ejercicios from "./Page/Ejercicios/Ejercicios";
import Alimentacion from "./Page/Alimentacion/Alimentacion";
import Avances from "./Page/Avances/Avances";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicios" element={<Ejercicios />} />
        <Route path="/alimentacion" element={<Alimentacion />} />
        <Route path="/avances" element={<Avances />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
