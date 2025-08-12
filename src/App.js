import "./Style/Style.css";
import "./App.css";
import OgRoots from "./Projects/OgRoots";
import { Routes, Route } from "react-router-dom";
import DashBord from "./Projects/Dashbord";

import Shop from "./Projects/shop";
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
              <DashBord />
            </div>
          }
        />
        <Route
          path="/shop"
          element={
            <div className="Og">
              <Shop />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
