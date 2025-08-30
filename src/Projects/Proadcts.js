//grid======================
import * as React from "react";

import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import CardProdact from "./CardProdact";

//=============
import "../Style/Style.css";

export default function Proadcts(params) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://required-zea-bashacode-671ff1dd.koyeb.app/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("خطأ في جلب المنتجات:", err));
  }, []);

  return (
    <div className="Prodacts" id="Prodacts">
      <div className="ProdactsContanet">
        <div className="Top">
          <h1>​منتجاتنا</h1>
        </div>
        <div className="Bodya">
          {/*==================Grid ============== */}
          <Box sx={{ flexGrow: 1, p: 1 }}>
            <Grid container spacing={2}>
              {products.map((product) => (
                <Grid item size={{ xs: 6, md: 4 }} key={product._id}>
                  <CardProdact
                    Titel={product.name}
                    prace={`${product.price} DA`}
                    src={product.imageUrl}
                  ></CardProdact>
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
