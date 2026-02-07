import { useEffect } from "react";
import { setTitle } from "../utils/title";
import gadgetsData from "../data/gadgets.json";

import {
  ComposedChart,
  Area,
  Bar,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Statistics = () => {
  useEffect(() => {
    setTitle("Statistics");
  }, []);

  // chart data
  const chartData = gadgetsData.map((g) => ({
    name: g.product_title.length > 12 ? g.product_title.slice(0, 12) + "..." : g.product_title,
    price: g.price,
    rating: g.rating
  }));

  return (
    <div>
      {/* Header */}
      <div className="bg-[#8b3dff] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Statistics</h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Price vs Product Name chart with rating scatter.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="bg-white rounded-3xl shadow p-6">
          <h2 className="text-2xl font-bold mb-6">Price vs Product Name</h2>

          <div className="w-full h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />

                <Area dataKey="price" fillOpacity={0.2} />
                <Bar dataKey="price" barSize={30} />
                <Scatter dataKey="rating" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          <p className="text-gray-500 mt-4">
            Y-axis = price, Scatter points represent rating.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
