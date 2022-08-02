import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import PageRecruit from "./pages/PageRecruit";
import PageMain from "./pages/PageMain";
import { useEffect } from "react";

function Desktop() {
  useEffect(() => {
    console.log("Desktop");
  }, []);
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PageMain />} />
        <Route path="/api/enterprise/recruit/form" element={<PageRecruit />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default Desktop;
