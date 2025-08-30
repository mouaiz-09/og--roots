import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Delete } from "@mui/icons-material";

export default function CardDelet({
  Titel = "erro",
  prace = "404",
  src = "https://m.media-amazon.com/images/I/719aat+IRzS._AC_SL1500_.jpg",
  onDelete,
  product,
}) {
  const handleDelete = async () => {
    try {
      const res = await fetch(
        `https://required-zea-bashacode-671ff1dd.koyeb.app/delete/${product._id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        alert("✅ المنتج تم حذفه بنجاح");
        onDelete(product._id); // تحديث القائمة بعد الحذف
      } else {
        alert("❌ فشل في حذف المنتج");
      }
    } catch (error) {
      console.error("خطأ أثناء الحذف:", error);
    }
  };

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
          <Button
            variant="contained"
            color="error"
            size="small"
            startIcon={<Delete color="error" />}
            className="BtnCard"
            onClick={handleDelete}
          >
            {" "}
            حذف المنتج
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}
