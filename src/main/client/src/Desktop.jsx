import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "components/commons/Header";
import Footer from "components/commons/Footer";
import Home from "pages/home/Home";
import RouteEnterprise from "pages/enterprise/RouteEnterprise";
import ThemeToggle from "components/commons/ThemeToggle";
import { useTheme } from "store/ThemeProvider";

function Desktop() {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <Router>
      <Header mode={ThemeMode} />
      <ThemeToggle toggle={toggleTheme} mode={ThemeMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise/*" element={<RouteEnterprise />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default Desktop;
