import { Route, Routes, useLocation } from "react-router-dom";
import { Detail, Form, Lading, HomePage } from "./views";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Lading />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/create" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
