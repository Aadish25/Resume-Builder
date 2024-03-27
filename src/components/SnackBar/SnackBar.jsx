import React from "react";
import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { handleClose } from "../../reducers/snackbar/snackbar";
import MuiAlert from "@mui/material/Alert";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export default function SnackBar() {
  const dispatch = useDispatch();
  const { open, message, severity } = useSelector((state) => state.snackbar);
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={() => dispatch(handleClose())}
      message={message}
      severity={severity}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
}
