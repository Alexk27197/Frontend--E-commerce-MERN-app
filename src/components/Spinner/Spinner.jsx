import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => --prev);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
        gap: "10px",
      }}
    >
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Redirecting to you in {count} second
      </h1>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
