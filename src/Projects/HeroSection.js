import { Avatar, Button } from "@mui/material";
import "../Style/Style.css";
import logo from "../Img/logo.jpg";

export default function HeroSection() {
  return (
    <div
      className="Hero"
      id="Hero"
      data-aos="flip-left"
    
    >
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
              textAlign: "start",
              width: "100%",
              direction: "rtl",
            }}
          >
            <h1 className="Titel">
              <span className="NameOfBrand">OG--Roots </span>
              مرحبا بيك في
            </h1>
          </div>
          <p className="Description" dir="rtl">
            مغلطتش كي خيرتنا
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "px",
            }}
          >
            <a href="#Prodacts" rel="noopener noreferrer">
              <Button variant="contained" className="BtnHero">
                 أحجز قبل ما تفوتك
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
