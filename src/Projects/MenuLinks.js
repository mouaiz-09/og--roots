import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";

import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export default function MenuLinks() {
  const [Statue, SetStatue] = useState("");
  useEffect(() => {
    console.log(Statue);
  });
  function Change(Vlue) {
    SetStatue(Vlue);
  }
  const buttons = [
    <a href="#Hero" rel="noopener noreferrer">
      {" "}
      <Button
        sx={{
          background: Statue === "الصفحة الرئيسة" ? "rgb(6, 24, 124)" : "",
        }}
        onClick={() => {
          Change("الصفحة الرئيسة");
        }}
        style={{ fontFamily: "Alexandria" }}
        key="one"
      >
        الصفحة الرئيسة
      </Button>
    </a>,
    <a href="#Prodacts" rel="noopener noreferrer">
      <Button
        sx={{
          background: Statue === "المنتجات" ? "rgb(6, 24, 124)" : "",
        }}
        onClick={() => {
          Change("المنتجات");
        }}
        style={{ fontFamily: "Alexandria" }}
        key="two"
      >
        المنتجات
      </Button>
    </a>,
    <a href="#about" target="_blank" rel="noopener noreferrer">
      <Button
        sx={{
          background: Statue === "نحن" ? "rgb(6, 24, 124)" : "",
        }}
        onClick={() => {
          Change("نحن");
        }}
        style={{ fontFamily: "Alexandria" }}
        key="three"
      >
        نحن
      </Button>
    </a>,
    <a href="#contacte" target="_blank" rel="noopener noreferrer">
      <Button
        sx={{
          background: Statue === "تواصل معنا" ? "rgb(6, 24, 124)" : "",
        }}
        onClick={() => {
          Change("تواصل معنا");
        }}
        style={{ fontFamily: "Alexandria" }}
        key="three"
      >
        تواصل معنا
      </Button>{" "}
    </a>,
  ];
  return (
    <Box
      className="MenuLinks"
      sx={{
        display: "flex",
        flexWrap: "wrap",

        "& > :not(style)": {
          m: 1,
          width: 138,
          height: 110,
        },
      }}
    >
      <Paper>
        <ButtonGroup
          fullWidth
          orientation="vertical"
          aria-label="Vertical button group"
          variant="contained"
          className="btngroupa"
        >
          {buttons}
        </ButtonGroup>
      </Paper>
    </Box>
  );
}
