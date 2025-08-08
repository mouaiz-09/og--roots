import logo from "../Img/logo.jpg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MenuLinks from "./MenuLinks";
//icons==================
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
//========================
export default function NavBar(params) {
  //state open menu
  const [open, setopne] = useState(false);
  function HendelOpenClice(params) {
    if (open) {
      setopne(false);
    } else setopne(true);
  }
  useEffect(() => {
    console.log(open);
  });
  return (
    <div className="NavBar">
      <div className="Logo">
        <a href="#">
          <Avatar alt="Og--Roots" src={logo} sx={{ width: 56, height: 56 }} />
        </a>
      </div>

      <Stack direction="row" spacing={2} className="Links">
        <a href="#Hero" rel="noopener noreferrer">
          {" "}
          الصفحة الرئيسة
        </a>
        <a href="#Prodacts"  rel="noopener noreferrer">
          {" "}
          المنتجات
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
          نحن
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {" "}
          تواصل معنا
        </a>
      </Stack>
      <div className="PhoneMenu">
        <MenuIcon
          fontSize="medium"
          onClick={() => HendelOpenClice()}
          style={{ color: "whitesmoke" }}
        />
      </div>
      {open ? <MenuLinks /> : <></>}
    </div>
  );
}
