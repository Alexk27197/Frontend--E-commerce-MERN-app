import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
