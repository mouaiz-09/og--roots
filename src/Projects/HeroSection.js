import { Avatar, Button } from "@mui/material";
import "../Style/Style.css";
import logo from "../Img/logo.jpg";
export default function HeroSection() {
  return (
    <div className="Hero" id="Hero">
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
              <b className="NameOfBrand">OG--Roots</b>
              ألبس وحدك !!!
            </h1>
          </div>
          <p className="Description" dir="rtl">
            مرحبا بيك في <b className="barns">OG–Roots</b>، وين تلقى كوليكسيون تاع حوايج محدودين
            بزاف. كل تيشرت ولا سترة نخدموها، راهي بإصدار خاص وما تعاودش تلقاها،
            باش تكون ديما مميز وراسك مرفوع. هنا، ستايلك هو اللي يحكي عليك قبل ما
            تهدر.
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
            <Button variant="contained" className="BtnHero">
              أحجز قبل ما تفوتك
            </Button>
            <span className="Pup">"عدد محدود جداً-القطع تروح بالخف"</span>
          </div>
        </div>
      </div>
    </div>
  );
}
