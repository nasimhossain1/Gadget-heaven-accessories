import { useContext, useEffect, useState } from "react";
import { GadgetContext } from "../context/GadgetContext";
import CartItem from "../components/CartItem";
import WishItem from "../components/WishItem";
import PurchaseModal from "../components/PurchaseModal";
import { useNavigate } from "react-router-dom";
import { setTitle } from "../utils/title";

const Dashboard = () => {
  const navigate = useNavigate();

  const {
    cart,
    wishlist,
    totalCost,
    removeFromCart,
    removeFromWishlist,
    sortCartByPriceDesc,
    moveWishToCart,
    clearCart
  } = useContext(GadgetContext);

  const [activeTab, setActiveTab] = useState("cart");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [purchaseTotal, setPurchaseTotal] = useState(0);

  useEffect(() => {
    setTitle("Dashboard");
  }, []);

  const handlePurchase = () => {
    if (cart.length === 0 || totalCost === 0) return;

    setPurchaseTotal(totalCost);
    clearCart();
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <div>
      {/* Header */}
      <div className="bg-[#8b3dff] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            Explore the latest gadgets that will take your experience to the next
            level. From smart devices to the coolest accessories, we have it all!
          </p>

          {/* Tabs */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setActiveTab("cart")}
              className={`px-10 py-3 rounded-full font-semibold border ${
                activeTab === "cart"
                  ? "bg-white text-purple-700"
                  : "bg-transparent text-white border-white"
              }`}
            >
              Cart
            </button>

            <button
              onClick={() => setActiveTab("wishlist")}
              className={`px-10 py-3 rounded-full font-semibold border ${
                activeTab === "wishlist"
                  ? "bg-white text-purple-700"
                  : "bg-transparent text-white border-white"
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-14">
        {activeTab === "cart" && (
          <>
            {/* Cart top row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <h2 className="text-2xl font-bold">Cart</h2>

              <div className="flex items-center gap-4">
                <p className="text-xl font-semibold">
                  Total cost: {totalCost.toFixed(2)}
                </p>

                <button
                  onClick={sortCartByPriceDesc}
                  className="px-5 py-2 rounded-full border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                >
                  Sort by Price
                </button>

                <button
                  disabled={cart.length === 0 || totalCost === 0}
                  onClick={handlePurchase}
                  className={`px-6 py-2 rounded-full font-semibold text-white ${
                    cart.length === 0 || totalCost === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-purple-600 hover:bg-purple-700"
                  }`}
                >
                  Purchase
                </button>
              </div>
            </div>

            {/* Cart Items */}
            <div className="space-y-6">
              {cart.length === 0 ? (
                <p className="text-gray-600">Cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <CartItem key={item.product_id} item={item} onRemove={removeFromCart} />
                ))
              )}
            </div>
          </>
        )}

        {activeTab === "wishlist" && (
          <>
            <h2 className="text-2xl font-bold mb-8">WishList</h2>

            <div className="space-y-6">
              {wishlist.length === 0 ? (
                <p className="text-gray-600">Wishlist is empty.</p>
              ) : (
                wishlist.map((item) => (
                  <WishItem
                    key={item.product_id}
                    item={item}
                    onRemove={removeFromWishlist}
                    onMoveToCart={moveWishToCart}
                  />
                ))
              )}
            </div>
          </>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && <PurchaseModal total={purchaseTotal} onClose={handleModalClose} />}
    </div>
  );
};

export default Dashboard;
