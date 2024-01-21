import React, { useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  IconButton,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if(e.target.name == 'username'){
      localStorage.setItem("username", e.target.value);
    }
    if(e.target.name == 'password'){
      localStorage.setItem("password", e.target.value);
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('username  <<  '+localStorage.getItem("username"));

    console.log('password  <<  '+localStorage.getItem("password"));

    try {
      const response = await axios.post(
        "http://localhost:5000/users/login",
        formData
      );
      const { token } = response.data;
      const walletBalance=response.data.user.walletBalance;
      console.log("accessToken  !!!  ",token);
      console.log(" wallet balance !!!  ",walletBalance);
      localStorage.setItem("userid",response.data.user.id)
      localStorage.setItem("accessToken", token);
      localStorage.setItem("WalletBalance", walletBalance);
      localStorage.setItem("tokenExpireTime", Date.now() + 1000 *60*60 *24);

      console.log('token with local storage  <<<<   '+localStorage.getItem("accessToken"));
      console.log('time with local storage  <<<<   '+localStorage.getItem("tokenExpireTime"));

      navigate("/home");
      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    if (!isPasswordFocused) {
      setIsPasswordFocused(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(8deg, #3d3636 0%, #494848 35%, #817e7e 100%)",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{ maxWidth: 400, boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
          >
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  marginTop: 2,
                  marginBottom: 4,
                  fontFamily: "Arial, sans-serif",
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#79091E",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                }}
              >
                Win Go Login
              </Typography>

              <TextField
                id="username"
                name="username"
                label="User Name or Phone Number"
                variant="outlined"
                fullWidth
                sx={{
                  marginBottom: 2,
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  fontFamily: "Arial, sans-serif",
                }}
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                id="password"
                name="password"
                label={isPasswordFocused ? "Password" : "Password"}
                type={showPassword ? "text" : "password"}
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                fullWidth
                variant="outlined"
                sx={{
                  marginBottom: 2,
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  fontFamily: "Arial, sans-serif",
                }}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 2,
              }}
            >
              <Button
                variant="contained"
                sx={{
                  background:
                    "linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)",
                  color: "white",
                  fontFamily: "Arial, sans-serif",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
                  padding: "12px 24px",
                }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </CardActions>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 2,
                }}
              >
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "0.8rem",
                  }}
                >
                  <a href="#">Forgot Password?</a>
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: "0.8rem",
                  }}
                >
                  New User? <Link href='/register'>Register</Link>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default LoginPage;