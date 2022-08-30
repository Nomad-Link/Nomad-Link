import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeToggle from "components/commons/ThemeToggle";
import { useTheme } from "store/ThemeProvider";
import { AnimatePresence } from "framer-motion";

import Header from "components/commons/Header";
import Footer from "components/commons/Footer";
import Home from "pages/home/Home";
import Login from "pages/account/Login";
import Register from "pages/account/Register";
import Resume from "pages/mypage/Resume";
import ResumeSave from "pages/mypage/ResumeSave";
import ResumeUpdate from "pages/mypage/ResumeUpdate";
import RouteEnterprise from "pages/enterprise/RouteEnterprise";
import RoutePrivate from "pages/private/RoutePrivate";
import MyPage from "pages/mypage/MyPage";

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
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/resume" element={<Resume />} />
          <Route path="/mypage/resume/save" element={<ResumeSave />} />
          <Route path="/mypage/resume/update" element={<ResumeUpdate />} />
          <Route path="/enterprise/*" element={<RouteEnterprise />} />
          <Route path="/private/*" element={<RoutePrivate />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
  );
}
export default Desktop;
