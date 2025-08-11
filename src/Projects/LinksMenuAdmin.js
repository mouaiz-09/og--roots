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
    <a href="#" rel="noopener noreferrer">
      {" "}
      <Button
        className="BtnLink"
        sx={{
          background: Statue === "عرض الموقع" ? "rgb(6, 24, 124)" : "",
        }}
        onClick={() => {
          Change("عرض الموقع");
        }}
        style={{ fontFamily: "Alexandria" }}
        key="one"
      >
        عرض الموقع
      </Button>
    </a>,
    <a href="#" rel="noopener noreferrer">
      <Button
        className="BtnLink"
        sx={{
          background: Statue === "اضافة" ? "rgb(6, 24, 124)" : "",
        }}
        onClick={() => {
          Change("اضافة");
        }}
        style={{ fontFamily: "Alexandria" }}
        key="two"
      >
        اضافة
      </Button>
    </a>,
    <a href="#" rel="noopener noreferrer">
      <Button
        className="BtnLink"
        sx={{
          background: Statue === "حذف" ? "rgb(6, 24, 124)" : "",
        }}
        onClick={() => {
          Change("حذف");
        }}
        style={{ fontFamily: "Alexandria" }}
        key="three"
      >
        حذف
      </Button>
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
          color="success"
          className="btngroupa"
          style={{
            background: "burlywood ",
          }}
        >
          {buttons}
        </ButtonGroup>
      </Paper>
    </Box>
  );
}
