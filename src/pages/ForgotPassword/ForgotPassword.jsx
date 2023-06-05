import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import "./ForgotPassword.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4445/api/auth/forgot-password",
        {
          email,
          newPassword,
          answer,
        }
      );

      if (response.data.success) {
        toast.success("Login Successfuly !");
        setEmail("");
        setNewPassword("");
        setAnswer("");
        navigate("/login");
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
      <div className="forgot-password-container">
        <form onSubmit={handleSubmit} className="fp-form">
          <h1 className="fp-title">Reset Password</h1>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className="fp-input"
          />

          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter Your New Password"
            className="fp-input"
          />

          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter Your Answer"
            className="fp-input"
          />

          <button className="fp-reset-btn" type="submit">
            Reset
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
