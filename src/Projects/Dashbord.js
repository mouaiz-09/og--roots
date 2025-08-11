//Dailoge=================================
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddProductForm from "./Admin";


import Sheet from "@mui/joy/Sheet";
//Dailoge=================================
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
      {Admin ? <AddProductForm /> : ""}
     
    </>
  );
}

/// massege

