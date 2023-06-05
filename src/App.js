import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Policy from "./pages/Policy/Policy.jsx";
import PageNotFound from "./pages/PageNotFound/PageNotFound.jsx";
import Register from "./pages/Register/Register.jsx";
import Login from "./pages/Login/Login.jsx";
import Dashboard from "./pages/User/Dashboard.jsx";
import PrivateRoute from "./Routes/private";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import AdminRoute from "./Routes/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import CreateCategory from "./pages/CreateCategory/CreateCategory";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
          </Route>
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="admin" element={<AdminDashboard />} />
          </Route>
          <Route
            path="/dashboard/admin/create-category"
            element={<CreateCategory />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/*" element={<PageNotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
