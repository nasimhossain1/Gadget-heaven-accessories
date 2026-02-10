import { NavLink, useLocation } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";


const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname.startsWith("/category");

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-purple-600 font-semibold"
      : "text-gray-700 hover:text-purple-600";

  return (
    <div className={isHome ? "bg-[#8b3dff] text-white" : "bg-white text-black"}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="bg-white text-purple-600 px-2 py-1 rounded-lg">
            GH
          </span>
          <span className={isHome ? "text-white" : "text-black"}>Gadget Heaven</span>
        </NavLink>

        {/* Menu */}
        <div className="flex items-center gap-6 ">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>
          <NavLink to="/statistics" className={navLinkStyle}>
            Statistics
          </NavLink>
          <NavLink to="/dashboard" className={navLinkStyle}>
            Dashboard
          </NavLink>
          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>
        </div>
        

        {/* Icons (no count) */}
        <div className="flex items-center gap-3">
          <NavLink
            to="/dashboard"
            className="w-10 h-10 rounded-full bg-white text-purple-600 flex items-center justify-center"
          >
            <FaShoppingCart />
          </NavLink>
          <NavLink
            to="/dashboard"
            className="w-10 h-10 rounded-full bg-white text-purple-600 flex items-center justify-center"
          >
            <FaHeart />
          </NavLink>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
