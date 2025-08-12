import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import CaedSHop from "./CardSHop";
import NavBar from "./NavBar";

export default function Shop() {
  document.title = "المتجر";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://og-roots-backend.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("خطأ في جلب المنتجات:", err));
  }, []);

  return (
    <div>
      <NavBar />
      <div className="BodyShop">
        <div className="Prodacts" id="Prodacts">
          <div className="ProdactsContanet">
            <div className="Top" style={{ marginTop: "50px" }}>
              <h1>منتجاتنا</h1>
            </div>
            <div className="Bodya">
              {/*==================Grid ============== */}
              <Box>
                <Grid
                  flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
                  container
                  padding={{ xs: 1, sm: 2, md: 3 }}
                  spacing={{ xs: 1, sm: 2, md: 3 }} // gap صغير في الهاتف، أكبر في التابلت، أكبر في الحاسوب
                >
                  {products.map((product) => (
                    <Grid item xs={6} md={4} key={product._id} width="100%">
                      <CaedSHop
                        Titel={product.name}
                        prace={`${product.price} DA`}
                        src={product.imageUrl}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Box>
              {/*==================Grid ============== */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*

   {products.map((product) => (
                  <CardProdact
                    Titel={product.name}
                    prace={`${product.price} DA`}
                    src={product.imageUrl}
                    key={product._id}
                  />
                ))}
*/
