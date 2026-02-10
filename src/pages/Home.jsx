import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setTitle } from "../utils/title";

const categories = [
  "All",
  "Laptop",
  "Phone",
  "Accessories",
  "Smartwatch",
  "Headphone",
  "Tablet",
  "Camera"
];

// ✅ ছোট component: category link
const CategoryLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-5 py-3 rounded-full font-medium transition ${
          isActive
            ? "bg-[#8b3dff] text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("Home");
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="bg-[#8b3dff] text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Upgrade Your Tech Accessories With Gadget Heaven
          </h1>

          <p className="mt-5 text-white/80 max-w-2xl mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to accessories — we have it all.
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-8 bg-white text-[#8b3dff] px-10 py-3 rounded-full font-semibold hover:bg-gray-100"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Cutting-Edge Gadgets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="bg-white rounded-3xl shadow p-6 space-y-4 h-fit">
            {categories.map((cat) => (
              <CategoryLink
                key={cat}
                to={cat === "All" ? "/" : `/category/${cat}`}
              >
                {cat}
              </CategoryLink>
            ))}
          </div>

          {/* Products */}
          <div className="md:col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
