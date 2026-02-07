const CartItem = ({ item, onRemove }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between gap-6">
      <div className="flex items-center gap-5">
        <div className="w-24 h-24 bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
          <img src={item.product_image} alt={item.product_title} className="h-full object-contain" />
        </div>

        <div>
          <h3 className="text-xl font-semibold">{item.product_title}</h3>
          <p className="text-gray-600 mt-1">{item.description}</p>
          <p className="font-semibold mt-2">Price: ${item.price}</p>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.product_id)}
        className="w-10 h-10 rounded-full border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
