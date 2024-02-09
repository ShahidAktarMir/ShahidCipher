import { useState } from "react";
import axios from "axios";
import { Button, TextField, Typography, Container, Grid } from "@mui/material";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handelRegister = async () => {
    try {
      const respose = await axios.post(
        "http://localhost:8013/api/auth/register",
        { name, username, email, password }
      );
      setStatus(respose.data.msg);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h3" align="center" gutterBottom>
        Resgister
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            type="text"
            placeholder="Your Name"
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="User Name"
            type="text"
            placeholder="Your Username"
            fullWidth
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            type="email"
            placeholder="Your Email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="error"
            onClick={handelRegister}
            fullWidth
            style={{
              borderRadius: "10px",
              background: "#2ecc71",
              color: "#ecf0f1",
            }}
          >
            Resgister
          </Button>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h6" align="center" gutterBottom>
            {status}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
