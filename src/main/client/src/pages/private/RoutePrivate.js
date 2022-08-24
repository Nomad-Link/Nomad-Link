import { Routes, Route } from "react-router-dom";
import EmployEnterprises from "./EmployEnterprises";

function RouteEnterprise() {
  return (
      <Routes>
        <Route path="/employ/enterprises" element={<EmployEnterprises />} />
      </Routes>
  );
}

export default RouteEnterprise;
