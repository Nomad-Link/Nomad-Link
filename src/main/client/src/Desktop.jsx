import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/commons/Header";
import Footer from "components/commons/Footer";
import Home from "pages/home/Home";
import RouteEnterprise from "pages/enterprise/RouteEnterprise";
import RoutePrivate from "pages/private/RoutePrivate";
import ThemeToggle from "components/commons/ThemeToggle";
import { useTheme } from "store/ThemeProvider";
import Login from "pages/account/Login";
import Register from "pages/account/Register";

function Desktop() {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <Router>
      <Header mode={ThemeMode} />
      <ThemeToggle toggle={toggleTheme} mode={ThemeMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/enterprise/*" element={<RouteEnterprise />} />
        <Route path="/private/*" element={<RoutePrivate />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default Desktop;
