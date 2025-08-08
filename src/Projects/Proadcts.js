//grid======================
import * as React from "react";

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import CardProdact from "./CardProdact"

//=============
import "../Style/Style.css";


export default function Proadcts(params) {
  return (
    <div className="Prodacts" id="Prodacts">
      <div className="ProdactsContanet">
        <div className="Top">
          <h1>🫠​منتجاتنا</h1>
        </div>
        <div className="Bodya">
          {/*==================Grid ============== */}
          <Box sx={{ flexGrow: 1, p: 1 }}>
            <Grid container spacing={2}>
              {Array.from({ length: 6 }).map((_, index) => (
                <Grid item size={{ xs: 6, md: 4 }} key={index}>
                  <CardProdact Titel={"Techert"} prace="250Da"></CardProdact>
                </Grid>
              ))}
            </Grid>
          </Box>
          {/*==================Grid ============== */}
        </div>
      </div>
    </div>
  );
}
