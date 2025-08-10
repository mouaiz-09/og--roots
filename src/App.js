import "./Style/Style.css";
import "./App.css";
import OgRoots from "./Projects/OgRoots";
import {  Routes, Route } from "react-router-dom";
import AddProductForm from "./Projects/Admin";
function App() {
  return (
    <>
     
        <Routes>
          <Route
            path="/"
            element={
              <div
                className="Og"
               
              >
                <OgRoots />
              </div>
            }
          />
          <Route path="/admin" element={<AddProductForm/>} />
        </Routes>
    
    </>
  );
}

export default App;
