const PurchaseModal = ({ total, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[380px] p-8 text-center">
        <div className="text-5xl mb-3">✅</div>
        <h2 className="text-2xl font-bold">Payment Successfully</h2>
        <p className="text-gray-600 mt-2">Thanks for purchasing.</p>
        <p className="mt-3 font-semibold">Total: ${total.toFixed(2)}</p>

        <button
          onClick={onClose}
          className="mt-6 w-full py-3 rounded-full bg-gray-200 hover:bg-gray-300 font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PurchaseModal;
