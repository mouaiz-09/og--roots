import "./Style/Style.css";
import "./App.css";
import OgRoots from "./Projects/OgRoots";
import { Routes, Route } from "react-router-dom";
import DashBord from "./Projects/Dashbord";
import { DashBordReal } from "./Projects/Dashbord";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div className="Og">
              <OgRoots />
            </div>
          }
        />
        <Route
          path="/admin"
          element={
            <div className="Og">
              <DashBordReal />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
