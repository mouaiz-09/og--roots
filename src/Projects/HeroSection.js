import { Avatar, Button } from "@mui/material";
import "../Style/Style.css";
import logo from "../Img/logo.jpg";

export default function HeroSection() {
  return (
    <div className="Hero" id="Hero" data-aos="flip-left">
      <div className="HeroContent">
        <div className="lOGO">
          <Avatar
            alt="Remy Sharp"
            src={logo}
            sx={{ width: 256, height: 256 }}
          />
        </div>
        <div className="TextContetn">
          <div
            style={{
              padding: "0",
              display: "flex",
              gap: "2px",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            className="TextHero"
          >
            <h2
              className="Titel"
              style={{
                direction: "ltr",
                display: "flex",
                gap: "2px",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
                margin: "0px",
              }}
            >
              {" "}
              <span className="NameOfBrand"> Og-Roots </span> مرحبا بيك في
            </h2>
            <h4 className="Description">مغلطتش كي خيرتنا</h4>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "px",
            }}
          >
            <a href="https://ogroots.vercel.app/Shop" rel="noopener noreferrer">
              <Button variant="contained" className="BtnHero">
                زيارة المتجر
              </Button>
            </a>
            <span className="Pup">"عدد محدود جداً-القطع تروح بالخف"</span>
          </div>
        </div>
      </div>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </div>
  );
}
