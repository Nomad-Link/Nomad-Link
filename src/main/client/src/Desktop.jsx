import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import Home from "./pages/Home";
import EnterpriseRoute from "./pages/enterprise/EnterpriseRoute";

function Desktop() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enterprise/*" element={<EnterpriseRoute />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default Desktop;
