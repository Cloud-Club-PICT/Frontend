import NavBar from "../components/NavbarComponent/Navbar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
