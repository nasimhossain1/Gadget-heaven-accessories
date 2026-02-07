import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname.startsWith("/category");

  return (
    <div className={isHome ? "bg-[#f7f7f7]" : "bg-white"}>
      <Navbar />
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
