//grid======================
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
//=============
import "../Style/Style.css"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
export default function Proadcts(params) {
  return (
    <>
      <div className="Prodacts">
        <div className="ProdactsContanet">
          <div className="Top">
            <h1>منتجاتنا</h1>
          </div>
          <div className="Body">
            {/*==================Grid ============== */}
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 6, md: 8 }}>
                  <Item>xs=6 md=8</Item>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Item>xs=6 md=4</Item>
                </Grid>
                <Grid size={{ xs: 6, md: 4 }}>
                  <Item>xs=6 md=4</Item>
                </Grid>
                <Grid size={{ xs: 6, md: 8 }}>
                  <Item>xs=6 md=8</Item>
                </Grid>
              </Grid>
            </Box>
            {/*==================Grid ============== */}
          </div>
        </div>
      </div>
    </>
  );
}
