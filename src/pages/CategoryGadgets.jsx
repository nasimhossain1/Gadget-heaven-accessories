import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import gadgetsData from "../data/gadgets.json";
import GadgetCard from "../components/GadgetCard";

const CategoryGadgets = () => {
  const { categoryName } = useParams();
  const [gadgets, setGadgets] = useState([]);

  useEffect(() => {
    if (categoryName === "All") {
      setGadgets(gadgetsData);
    } else {
      const filtered = gadgetsData.filter((g) => g.category === categoryName);
      setGadgets(filtered);
    }
  }, [categoryName]);

  // Home route open করলে default category set
  if (!categoryName) return <Navigate to="/category/All" />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {gadgets.slice(0, 9).map((gadget) => (
        <GadgetCard key={gadget.product_id} gadget={gadget} />
      ))}
    </div>
  );
};

export default CategoryGadgets;
