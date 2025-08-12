import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function CaedSHop({
  Titel = "erro",
  prace = "404",
  src = "https://m.media-amazon.com/images/I/719aat+IRzS._AC_SL1500_.jpg",
}) {
  const phone = "213562260041";
  const message = "og--roots slam"; // الرسالة الجاهزة
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  return (
    <Card
      sx={{
        textAlign: "center",
        background: "burlywood",
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      <div style={{ flex: "2", background: "rgb(255, 255, 255)" }}>
        <CardMedia
          component="img"
          alt={Titel}
          image={src}
          className="ImgeProdactShop"
          height={"100%"}
          width={"110%"}
        />
      </div>
      <div style={{ flex: "3" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            className="CardTitelShop"
            component="div"
          >
            {Titel}
          </Typography>
          <Typography
            variant="body"
            color="warning"
            sx={{ color: "text.secondary" }}
            className="Prix"
          >
            {prace}
          </Typography>
        </CardContent>
        <CardActions className="CardActions">
          <Link onClick={() => window.open(url, "_blank")} underline="none">
            <Button
              variant="contained"
              color="success"
              size="small"
              startIcon={<WhatsAppIcon />}
              className="BtnCard"
            >
              {" "}
              تواصل معنا
            </Button>
          </Link>
        </CardActions>
      </div>
    </Card>
  );
}
