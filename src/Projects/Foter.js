import { Avatar, Button, Link } from "@mui/material";
import logo from "../Img/logo.jpg";
import { WatchSharp } from "@mui/icons-material";
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
              <WhatsAppIcon color="success" />
            </Link>
          </div>

          <di className="Mouaiz">
            <p>2025@OgRoots</p>
          </di>

          <div className="logoFoter">
            <Avatar src={logo} alt="logo "></Avatar>
          </div>
        </div>
      </div>
    </>
  );
}
