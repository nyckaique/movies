import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Paper } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  borderRadius: ".5em",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ title, overview }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let resumo =
    "Esse filme não possui um resumo no banco de dados do The Movie Database (TMDB)";

  function temResumo() {
    if (overview !== "") {
      resumo = overview;
    }
  }
  temResumo();

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
        style={{
          marginBottom: "0.5em",
          border: "2px solid #514A64",
          color: "#514A64",
        }}
      >
        Resumo
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Paper sx={style}>
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {resumo}
            </Typography>
          </Box>
        </Paper>
      </Modal>
    </div>
  );
}
