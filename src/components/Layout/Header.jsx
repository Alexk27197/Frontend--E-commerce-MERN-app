import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import userProfile from "../../Assets/user-profile.png";
import arrowDown from "../../Assets/arrow-down-sign-to-navigate.png";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaUser, FaUserPlus } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { useAuth } from "../../Context/Auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = () => {
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfuly !");
  };
  const [arrowPosition, setArrowPosition] = useState(false);

  return (
    <header>
      <div className="logo">
        <NavLink to="/">Alex E-ccomerce</NavLink>
      </div>
      <nav>
        <div className="wrapper">
          <div className="btn-group">
            <button
              onClick={() => setArrowPosition(!arrowPosition)}
              type="button"
              className="btn dropdown-toggle"
            >
              <div className="profile-img">
                <img src={userProfile} alt="User Profile" />
              </div>
              <img
                className={arrowPosition ? "arrow-down arrow-up" : "arrow-down"}
                src={arrowDown}
                alt="arrow down"
              />
            </button>
            <ul
              className={arrowPosition ? "dropdown-menu show" : "dropdown-menu"}
            >
              {!auth.user ? (
                <>
                  <li>
                    <NavLink className="dropdown-item" to="/login">
                      <FaUser size={20} />
                      <div>Login</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/register">
                      <FaUserPlus size={20} />
                      <div>Register</div>
                    </NavLink>
                  </li>
                </>
              ) : (
                <ul>
                  <li>
                    <NavLink
                      className="dropdown-item"
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                    >
                      <FaTasks size={20} />
                      <div>Dashboard</div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      className="dropdown-item"
                      to="/login"
                    >
                      <RiLogoutBoxLine size={20} />
                      <div>Logout</div>
                    </NavLink>
                  </li>
                </ul>
              )}
            </ul>
          </div>
          <div className="cart">
            <NavLink>
              <HiOutlineShoppingCart size={24} className="cart-icon" />
              <div className="qty">40</div>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
