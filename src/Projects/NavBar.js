import logo from "../Img/logo.jpg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MenuLinks from "./MenuLinks";
//icons==================
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Link } from "@mui/material";
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
        <Link height="#" >
          <Avatar alt="Og--Roots" src={logo} sx={{ width: 56, height: 56 }} />
        </Link>
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
        <a href="#about" target="_blank" rel="noopener noreferrer">
          {" "}
          نحن
        </a>
        <a href="#contacte" target="_blank" rel="noopener noreferrer">
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
