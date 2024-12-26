import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <Navbar />
      {/* Páginas hijas */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
