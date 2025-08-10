import { Avatar, Link } from "@mui/material";
import logo from "../Img/logo.jpg";
import {  Instagram } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Foter() {
  const phone = "213562260041";
  const message = "og--roots slam"; // الرسالة الجاهزة
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <>
      <div className="foter">
        <div className="fotereContetn">
          <div className="Bt">
            <Link onClick={() => window.open(url, "_blank")} underline="none">
              <WhatsAppIcon style={{ color: "burlywood" }} />
              <Instagram
                style={{ color: "burlywood" }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/ogroots_off/",
                    "_blank"
                  )
                }
              />
            </Link>
          </div>

          <di className="Mouaiz">
            <span>2025@OgRoots</span>

            <a
              href="https://www.instagram.com/abd_elmouaiz_10/"
              rel="noopener noreferrer"
            >
              by:Mouaiz
            </a>
          </di>

          <div className="logoFoter">
            <Avatar src={logo} alt="logo "></Avatar>
          </div>
        </div>
      </div>
    </>
  );
}
