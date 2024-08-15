import { Outlet } from "react-router-dom";
import { FloatingRoutes } from "../../components";
function GodMode() {
  return (
    <>
      <Outlet />

      <FloatingRoutes />
    </>
  );
}

export default GodMode;
