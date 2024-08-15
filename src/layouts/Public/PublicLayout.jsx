// import React from "react";
import { Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function PublicLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default PublicLayout;
