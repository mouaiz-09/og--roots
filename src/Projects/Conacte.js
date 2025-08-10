import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import "../Style/Style.css"
//icons
import Instgram from "../Img/instgram.png";
import TikTok from "../Img/TikTok.png";
import Facebook from "../Img/Facebook.png";
export default function Conacte() {
  return (
    <div className="Conatct" id="contacte">
      <div className="ConatctContenet" id="contacte">
        <h1 className="Top"> تابعنا باه تعرف غير الجديد</h1>
        <Stack className="Body" direction="row" spacing={2}>
          <Link href="https://www.instagram.com/ogroots_off/" underline="none">
            <Avatar src={Instgram} style={{ width: "auto", height: 56 }} />
          </Link>
          <Avatar
            src={TikTok}
            style={{ width: "auto", height: 56, background: "whitesmoke" }}
          />
          <Avatar src={Facebook} style={{ width: "auto", height: 56 }} />
        </Stack>
      </div>
    </div>
  );
}
