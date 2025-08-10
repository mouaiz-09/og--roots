//
import "../index.css";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Proadcts from "./Proadcts";
import About from "./About";
import Conacte from "./Conacte";
import Foter from "./Foter";

import { ThemeProvider, THEME_ID, createTheme } from "@mui/material/styles";

const materialTheme = createTheme({
  palette: {
    primary: {
      main: "rgb(255, 255, 255)",
    },
  },
});
export default function OgRoots(params) {
  return (
    <ThemeProvider theme={materialTheme}>
      <div style={{ display: "block" }}>
        <NavBar />
        <HeroSection />
        <Proadcts />
        <About />
        <Conacte />
        <Foter />
      </div>
    </ThemeProvider>
  );
}
