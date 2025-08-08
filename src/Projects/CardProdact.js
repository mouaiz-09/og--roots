import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
export default function CardProdact({
  Titel = "erro",
  prace = "404",
  src = "https://m.media-amazon.com/images/I/719aat+IRzS._AC_SL1500_.jpg",
}) {
  return (
    <Card sx={{ maxWidth: 345, textAlign: "center" }}>
      <CardMedia
        component="img"
        alt={Titel}
        height
        image={src}
        style={{ padding: "10px" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          className="CardTitel"
          component="div"
        >
          {Titel}
        </Typography>
        <Typography
          variant="body"
          color="warning"
          sx={{ color: "text.secondary" }}
        >
          {prace}
        </Typography>
      </CardContent>
      <CardActions className="CardActions">
        <Link href="tel:+213 656393011" underline="none">
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
    </Card>
  );
}
