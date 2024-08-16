import { Outlet } from "react-router-dom";
import { FloatingRoutes } from "../../components";
import { useEffect, useState } from "react";
import itachi from "../../assets/itachi_2.gif";

function GodMode() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10500);
  }, []);

  return !isLoading ? (
    <>
      <Outlet />
      <FloatingRoutes />
    </>
  ) : (
    <>
      <img className="vh-100 vw-100" src={itachi} alt="" />
    </>
  );
}

export default GodMode;
