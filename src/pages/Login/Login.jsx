import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/Auth";
import Layout from "../../components/Layout/Layout";
const Login = () => {
  const [auth, setAuth] = useAuth();
  const [email, setEmail] = useState("");
  const location = useLocation();
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4445/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(response.data));
        toast.success("Login Successfuly !");
        setEmail("");
        setPassword("");
        navigate(location.state || "/");
      } else {
        toast.error("Login Failed");
      }
    } catch (error) {
      console.error(error);
      // Handle the error as per your requirement
    }
  };

  return (
    <Layout>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <h1 className="login-title">Login</h1>
          <input
            className="login-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />

          <input
            className="login-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          />

          <button className="login-btn" type="submit">
            Login
          </button>
          <button
            className="forgot-btn"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Forgot Passowrd
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
