import { IconButton, TextField, Typography } from "@mui/material";
import Fingerprint from "@mui/icons-material/Fingerprint";
import LoadingButton from "@mui/lab/LoadingButton";

import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const UI = () => {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true);
  }
  return (
    <>
      <Typography
        maxWidth={200}
        align="center"
        padding={2}
        margin={1}
        borderRadius={10}
        color={"#ecf0f1"}
        bgcolor={"#2ecc71"}
        // sx={{ cursor: "pointer" }}
        // style={pointer}
        classes="pointer"
      >
        Hi SHahid
      </Typography>
      <IconButton sx={{ color: "#2ecc71" }}>
        <Fingerprint />
      </IconButton>
      <LoadingButton
        size="small"
        onClick={handleClick}
        endIcon={<SendIcon />}
        loading={loading}
        loadingPosition="end"
        variant="contained"
        sx={{ background: "#2ecc71", ":hover": { background: "red" } }}
      >
        <span>Send</span>
      </LoadingButton>
      <TextField></TextField>
    </>
  );
};

export default UI;
