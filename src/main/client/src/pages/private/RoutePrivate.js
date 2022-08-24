import { Routes, Route } from "react-router-dom";
import Private from "./Private";

function RouteEnterprise() {
  return (
      <Routes>
        <Route path="/" element={<Private />} />
      </Routes>
  );
}

export default RouteEnterprise;
