import React, { useState } from "react";
import "./Register.css";
import Layout from "../../components/Layout/Layout";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useLocation } from "react-router-dom";
const Register = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    try {
      const response = await fetch("http://localhost:4445/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          answer,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Registration Successful!");
        setName("");
        setPassword("");
        setEmail("");
        setAnswer("");
        navigate("/login");
      } else {
        toast.error("Registration Failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <Layout>
      <div className="register-container">
        <form onSubmit={handleRegister} className="register-form">
          <h1 className="register-title">Register</h1>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="register-input"
          />

          <input
            className="register-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />

          <input
            className="register-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          />

          <input
            className="register-input"
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="What is Your Favorite Sports"
          />

          <button className="register-btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
