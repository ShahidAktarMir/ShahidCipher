import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const handelLogin = async () => {
    try {
      const respone = await axios.post("http://localhost:8013/api/auth/login", {
        email,
        password,
      });
      console.log(respone.data);
      // setStatus(respone.data.msg);
    } catch (error) {
      console.log();
      error.response.status === 429
        ? setStatus(error.response.data)
        : setStatus(error.response.data.msg);
    }
  };
  return (
    <Container maxWidth="xs">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography align="center" variant="h3" gutterBottom>
            Login{" "}
          </Typography>
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
            placeholder="Your Password"
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handelLogin}
            fullWidth
            style={{
              borderRadius: "10px",
              background: "#2ecc71",
              color: "#ecf0f1",
            }}
          >
            Login
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography>{status}</Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
