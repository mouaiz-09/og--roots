//
import "../index.css";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Proadcts from "./Proadcts";
import About from "./About";
import Conacte from "./Conacte";
import Foter from "./Foter";
export default function OgRoots(params) {
  return (
    <div style={{ display: "block" }}>
      <NavBar />
      <HeroSection />
      <Proadcts />
      <About />
      <Conacte />
      <Foter/>
     
  </div>
  );
}
