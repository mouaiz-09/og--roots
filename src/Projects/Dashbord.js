import "../Style/Style.css";
//Dailoge=================================
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// =================navbar==========
import logo from "../Img/logo.jpg";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MenuLinks from "./MenuLinks";
//===============icons==================
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { Link } from "@mui/material";
//========================

import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
//Massege===============================
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

// delet  section =====================================================

import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

//=============
import "../Style/Style.css";
import CardDelet from "./CardDelet";
export default function DashBord(params) {
  const [Admin, SetAdmin] = React.useState(false);

  //============Dailoge=================================
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const password = formJson.password;
    if (password === "Admin") {
      console.log("the user is admin");
      SetAdmin(true);
    } else {
      SetAdmin(false);

      handleClickOpen();
    }
    handleClose();
  };
  //============Dailoge=================================

  return (
    <>
      <React.Fragment>
        {Admin === false ? (
          <div className="AdminPage">
            <Button
              variant="contained"
              className="BtnLogIn"
              onClick={handleClickOpen}
            >
              تسجيل الدخول
            </Button>
          </div>
        ) : (
          <></>
        )}

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle className="TitelLogonIn">تسجيل الدخول</DialogTitle>
          <DialogContent>
            <DialogContentText className="TitelLogonIn">
              يرجى ادخال كلمة السر الصحيحة
            </DialogContentText>
            <form onSubmit={handleSubmit} id="subscription-form">
              <TextField
                autoFocus
                required
                margin="normal"
                id="name"
                name="password"
                label="كلمة السر"
                type="password"
                fullWidth
                variant="standard"
                color="warning"
                dir="rtl"
                className="TitelLogonIn"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClose}
              className="TitelLogonIn"
              variant="text"
              color="error"
            >
              الغاء
            </Button>
            <Button
              type="submit"
              form="subscription-form"
              className="TitelLogonIn"
              variant="contained"
              color="success"
            >
              تسجيل
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
      {Admin ? <DashBordReal /> : ""}
    </>
  );
}

export function DashBordReal(params) {
  return (
    <>
      <Nav />
      <div className="BodyContetnt">
        <Tabs aria-label="Basic tabs" defaultValue={0}>
          <TabList>
            <Tab className="Tabs" color="success">
              اضافة منتج{" "}
            </Tab>
            <Tab className="Tabs" color="danger">
              حذف منتج
            </Tab>
          </TabList>
          <TabPanel value={0}>
            <AddNewProdact />
          </TabPanel>
          <TabPanel value={1} color="danger">
            <Proadctsshow />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
//=========================================================

//navbar======================================================
function Nav(params) {
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
    <>
      <div className="NavBar">
        <div className="Logo">
          <Link height="#">
            <Avatar alt="Og--Roots" src={logo} sx={{ width: 56, height: 56 }} />
          </Link>
        </div>

        <Stack direction="row" spacing={2} className="Links">
          <a href="#Hero" rel="noopener noreferrer">
            {" "}
            عرض الموفع
          </a>
          <a href="#Prodacts" rel="noopener noreferrer">
            {" "}
            اضافة موقع جديد
          </a>
          <a href="#about" rel="noopener noreferrer">
            {" "}
            حذف منتج
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
    </>
  );
}

//Add Prodact======================================================================================================
function AddNewProdact() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("error");
  const [messageOpen, setMessageOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price) {
      setMessage("❌ الاسم والسعر مطلوبين");
      setMessageOpen(true);
      return;
    }

    if (!image) {
      setMessage("❌ الرجاء اختيار صورة للمنتج");
      setMessageOpen(true);
      return;
    }

    // تحقق من نوع الصورة
    if (!["image/jpeg", "image/png", "image/webp"].includes(image.type)) {
      setMessage("❌ صيغة الصورة غير مدعومة (اختر JPEG أو PNG أو WebP)");
      setMessageOpen(true);
      return;
    }

    // تحقق من حجم الصورة (مثلاً أقل من 5 ميغابايت)
    if (image.size > 5 * 1024 * 1024) {
      setMessage("❌ حجم الصورة كبير جدًا (الحد الأقصى 5MB)");
      setMessageOpen(true);
      return;
    }

    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("image", image);

    try {
      const res = await fetch(
        "https://required-zea-bashacode-671ff1dd.koyeb.app/api/products",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ تمت إضافة المنتج بنجاح");
        setMessageOpen(true);
        setProduct({ name: "", description: "", price: "" });
        setImage(null);
        e.target.reset();
      } else {
        setMessage(`❌ ${data.message || "حدث خطأ أثناء الإضافة"}`);
        setMessageOpen(true);
      }
    } catch (error) {
      setMessage("❌ خطأ في الاتصال بالخادم");
      setMessageOpen(true);
    }
  };

  return (
    <>
      <div className="nav"></div>
      <div style={{ maxWidth: 400, margin: "auto" }}>
        <h2>OG Roots - أضف منتج جديد</h2>
        <form onSubmit={handleSubmit} className="formDatat">
          <div>
            <label>اسم المنتج:</label>
            <br />
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label>السعر:</label>
            <br />
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
            />
          </div>
          <div>
            <label>صورة المنتج:</label>
            <br />
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <Button
            type="submit"
            color="success"
            variant="contained"
            fullWidth
            style={{ marginTop: "10px" }}
          >
            أضف المنتج
          </Button>
        </form>
      </div>
      <Massege
        state={messageOpen}
        content={message}
        setstate={setMessageOpen}
      />
    </>
  );
}

//message=========================================================
function Massege({ state, content, setstate }) {
  function Close() {
    setstate(false);
  }
  return (
    <React.Fragment>
      <Modal
        aria-labelledby="close-modal-title"
        open={state}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{ minWidth: 300, borderRadius: "md", p: 3 }}
        >
          <ModalClose variant="outlined" onClick={() => Close()} />
          <Typography
            component="h2"
            id="close-modal-title"
            level="h4"
            textColor="inherit"
            sx={{ fontWeight: "lg" }}
            color="danger"
          >
            {content}
          </Typography>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}

//delet Prodacte =================///======================***************************************
//grid======================

export function Proadctsshow(params) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://required-zea-bashacode-671ff1dd.koyeb.app/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("خطأ في جلب المنتجات:", err));
  }, []);
  const handleDeleteProduct = (id) => {
    setProducts(products.filter((p) => p._id !== id));
  };

  return (
    <div>
      {/*==================Grid ============== */}
      <Box className="Phones">
        <Grid
          flexWrap={{ xs: "wrap", sm: "wrap", md: "nowrap" }}
          container
          padding={{ xs: 1, sm: 2, md: 3 }}
          spacing={{ xs: 1, sm: 2, md: 3 }} // gap صغير في الهاتف، أكبر في التابلت، أكبر في الحاسوب
        >
          {products.map((product) => (
            <Grid item xs={6} md={4} key={product._id} width="100%">
              <CardDelet
                onDelete={handleDeleteProduct}
                Titel={product.name}
                prace={`${product.price} DA`}
                src={product.imageUrl}
                product={product}
              ></CardDelet>
            </Grid>
          ))}
        </Grid>
      </Box>
      {/*==================Grid ============== */}
    </div>
  );
}
