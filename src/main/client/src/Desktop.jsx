import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeToggle from "components/commons/ThemeToggle";
import { useTheme } from "store/ThemeProvider";
import { AnimatePresence } from "framer-motion";

import Header from "components/commons/Header";
import Footer from "components/commons/Footer";
import Home from "pages/home/Home";
import Login from "pages/account/Login";
import Register from "pages/account/Register";
import Notice from "pages/notice/Notice";
import RouteEnterprise from "pages/enterprise/RouteEnterprise";
import RoutePrivate from "pages/private/RoutePrivate";
import RouteMyPage from "pages/mypage/RouteMyPage";

function Desktop() {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <Router>
      <Header mode={ThemeMode} />
      <ThemeToggle toggle={toggleTheme} mode={ThemeMode} />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mypage/*" element={<RouteMyPage />} />
          <Route path="/notice/*" element={<Notice />} />
          <Route path="/enterprise/*" element={<RouteEnterprise />} />
          <Route path="/private/*" element={<RoutePrivate />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}
export default Desktop;
