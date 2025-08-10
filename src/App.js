import "./Style/Style.css";
import "./App.css";
import OgRoots from "./Projects/OgRoots";
import { brown } from "@mui/material/colors";
function App() {
  return (
    <div
      className="Og"
      style={{
        background: brown["900"],
      }}
    >
      <OgRoots />
    </div>
  );
}

export default App;
