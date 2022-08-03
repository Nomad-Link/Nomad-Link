import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import PageRecruit from "./pages/PageRecruit";
import PageHome from "./pages/PageHome";
import PageComplete from "./pages/PageComplete";

function Desktop() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/api/enterprise/recruit/form" element={<PageRecruit />} />
        <Route path="/api/enterprise/recruit/complete" element={<PageComplete />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default Desktop;
