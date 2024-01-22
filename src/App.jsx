import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agente from "./pages/Agente";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/agente/:id" element={<Agente />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
