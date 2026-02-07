const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Gadget Heaven</h2>
          <p className="text-gray-500 mt-2">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg mb-3">Services</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Product Support</li>
              <li>Order Tracking</li>
              <li>Shipping & Delivery</li>
              <li>Returns</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className="text-gray-600 space-y-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">Legal</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-gray-500 mt-10">
          © {new Date().getFullYear()} Gadget Heaven. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
