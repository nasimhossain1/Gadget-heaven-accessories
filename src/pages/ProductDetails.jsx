import { useContext, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import gadgetsData from "../data/gadgets.json";
import { GadgetContext } from "../context/GadgetContext";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { setTitle } from "../utils/title";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    addToCart,
    addToWishlist,
    isInWishlist
  } = useContext(GadgetContext);

  const product = useMemo(() => {
    return gadgetsData.find((p) => p.product_id === id);
  }, [id]);

  useEffect(() => {
    setTitle("Product Details");
  }, []);

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Product Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-5 px-6 py-2 rounded-full bg-purple-600 text-white"
        >
          Go Home
        </button>
      </div>
    );
  }

  const {
    product_title,
    product_image,
    price,
    description,
    Specification,
    availability,
    rating
  } = product;

  return (
    <div>
      {/* Header */}
      <div className="bg-[#8b3dff] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Product Details</h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Explore the latest gadgets that will take your experience to the next
            level. From smart devices to the coolest accessories, we have it all!
          </p>
        </div>
      </div>

      {/* Details Card */}
      <div className="max-w-6xl mx-auto px-4 -mt-10">
        <div className="bg-white rounded-3xl shadow p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-6">
            <img
              src={product_image}
              alt={product_title}
              className="max-h-[320px] object-contain"
            />
          </div>

          {/* Info */}
          <div>
            <h2 className="text-3xl font-bold">{product_title}</h2>
            <p className="mt-2 text-xl font-semibold">Price: ${price}</p>

            <span
              className={`inline-block mt-3 px-4 py-1 rounded-full text-sm font-medium ${
                availability
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {availability ? "In Stock" : "Out of Stock"}
            </span>

            <p className="mt-4 text-gray-600">{description}</p>

            <h3 className="mt-6 font-semibold text-lg">Specification:</h3>
            <ul className="list-decimal ml-6 mt-2 text-gray-600 space-y-1">
              {Specification.map((s, idx) => (
                <li key={idx}>{s}</li>
              ))}
            </ul>

            <p className="mt-6 font-semibold">
              Rating ⭐: <span className="text-gray-700">{rating}</span>
            </p>

            {/* Buttons */}
            <div className="mt-7 flex items-center gap-4">
              <button
                onClick={() => addToCart(product)}
                className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold flex items-center gap-2 hover:bg-purple-700"
              >
                Add To Cart <FaShoppingCart />
              </button>

              <button
                disabled={isInWishlist(product.product_id)}
                onClick={() => addToWishlist(product)}
                className={`w-12 h-12 rounded-full border flex items-center justify-center ${
                  isInWishlist(product.product_id)
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-white text-purple-600 hover:bg-purple-50"
                }`}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
