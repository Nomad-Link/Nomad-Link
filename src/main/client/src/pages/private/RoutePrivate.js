import { Routes, Route } from "react-router-dom";
import EmployEnterprises from "./EmployEnterprises";
import Private from "./Private";

function RouteEnterprise() {
  return (
      <Routes>
        <Route path="/" element={<Private />} />
        <Route path="/employ/enterprises" element={<EmployEnterprises />} />
      </Routes>
  );
}

export default RouteEnterprise;
