import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setTitle } from "../utils/title";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTitle("Home");
  }, []);

  return (
    <div>
      {/* Banner */}
      <div className="bg-[#8b3dff] text-white py-16 rounded-b-[40px]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Upgrade Your Tech Accessorize with <br />
            Gadget Heaven Accessories
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            Explore the latest gadgets that will take your experience to the next
            level. From smart devices to the coolest accessories, we have it all!
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="mt-8 px-8 py-3 rounded-full bg-white text-purple-700 font-semibold hover:scale-105 transition"
          >
            Shop Now
          </button>

          <div className="mt-12 max-w-4xl mx-auto bg-white/20 p-4 rounded-3xl">
            <img
              className="w-full rounded-2xl"
              src="https://i.ibb.co/3N5dQpQ/vr.png"
              alt="banner"
            />
          </div>
        </div>
      </div>

      {/* Category + Products */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-3xl font-bold text-center mb-10">
          Explore Cutting-Edge Gadgets
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl shadow p-5 space-y-3">
              <p className="font-semibold mb-2">Categories</p>

              <CategoryLink name="All Product" route="All" />
              <CategoryLink name="Laptops" route="Laptops" />
              <CategoryLink name="Phones" route="Phones" />
              <CategoryLink name="Smart Watches" route="Smart Watches" />
              <CategoryLink name="Chargers" route="Chargers" />
              <CategoryLink name="Power Banks" route="Power Banks" />
            </div>
          </div>

          {/* Nested Products */}
          <div className="md:col-span-3">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import { NavLink } from "react-router-dom";

const CategoryLink = ({ name, route }) => {
  return (
    <NavLink
      to={`/category/${route}`}
      className={({ isActive }) =>
        isActive
          ? "block px-4 py-2 rounded-full bg-purple-600 text-white font-medium"
          : "block px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-purple-100"
      }
    >
      {name}
    </NavLink>
  );
};
