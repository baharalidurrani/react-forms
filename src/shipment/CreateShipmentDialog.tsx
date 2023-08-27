import CloseIcon from "@mui/icons-material/Close";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { TransitionProps } from "@mui/material/transitions";
import * as React from "react";
import CreateShipment from "./CreateShipment";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateShipmentDialog(): React.ReactElement {
  console.log("🔄 CreateShipmentDialog Rendered");

  const [open, setOpen] = React.useState(false);

  /** Mimic calling child's method. */
  const [submitCounter, setSubmitCounter] = React.useState(0);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const shipperForm = new FormData(event.currentTarget);
    const shipperObject = Object.fromEntries(shipperForm.entries());
    console.log("shipperObject", shipperObject);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Create Shipment
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Create New Shipment
            </Typography>
            <Button
              autoFocus
              color="inherit"
              onClick={() => setSubmitCounter((prev) => prev + 1)}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        <CreateShipment
          submitCounter={submitCounter}
          submitHandler={submitHandler}
        />
      </Dialog>
    </div>
  );
}
