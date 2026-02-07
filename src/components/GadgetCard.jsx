import { Link } from "react-router-dom";

const GadgetCard = ({ gadget }) => {
  const { product_id, product_title, product_image, price } = gadget;

  return (
    <div className="bg-white rounded-2xl shadow p-5">
      <div className="bg-gray-100 rounded-xl h-44 flex items-center justify-center overflow-hidden">
        <img
          src={product_image}
          alt={product_title}
          className="h-full object-contain"
        />
      </div>

      <h3 className="text-lg font-semibold mt-4">{product_title}</h3>
      <p className="text-gray-600 mt-1">Price: ${price}</p>

      <Link
        to={`/details/${product_id}`}
        className="inline-block mt-4 px-4 py-2 rounded-full border border-purple-500 text-purple-600 hover:bg-purple-600 hover:text-white transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default GadgetCard;
