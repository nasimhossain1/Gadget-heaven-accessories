import { useEffect } from "react";
import { setTitle } from "../utils/title";

const About = () => {
  useEffect(() => {
    setTitle("About");
  }, []);

  return (
    <div>
      <div className="bg-[#8b3dff] text-white py-14">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold">About Gadget Heaven</h1>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            We bring you the latest and greatest gadgets at affordable prices.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="bg-white rounded-3xl shadow p-8">
          <h2 className="text-2xl font-bold">Who We Are</h2>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Gadget Heaven is your trusted gadget marketplace. Our mission is to
            make premium technology accessible for everyone. We provide
            high-quality products, fast delivery, and a smooth shopping
            experience.
          </p>

          <h2 className="text-2xl font-bold mt-10">Why Choose Us?</h2>
          <ul className="list-disc ml-6 mt-3 text-gray-600 space-y-2">
            <li>Latest gadgets with verified quality</li>
            <li>Secure cart & wishlist system</li>
            <li>Price limit protection (max $1000)</li>
            <li>Clean UI based on Figma design</li>
            <li>Fast and smooth navigation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
