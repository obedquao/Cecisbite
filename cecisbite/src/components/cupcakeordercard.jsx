import React, { useState } from "react";

const CupcakeCard = () => {
  // 1. Cupcake Price Matrix: [Quantity]
  const CUPCAKE_PRICES = {
    "Box of 4": 150,
    "Box of 6": 180,
    "Box of 12": 300,
    "Box of 24": 350,
  };

  const [formData, setFormData] = useState({
    name: "",
    quantity: "Box of 6",
    flavor: "Vanilla",
    date: "",
  });

  const WHATSAPP_NUMBER = "233248967727";
  const currentPrice = CUPCAKE_PRICES[formData.quantity];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const message =
      `*NEW CUPCAKE ORDER - CECI'S BITE* 🧁\n\n` +
      `👤 *Customer:* ${formData.name}\n` +
      `📦 *Quantity:* ${formData.quantity}\n` +
      `🍓 *Flavor:* ${formData.flavor}\n` +
      `📅 *Date:* ${formData.date}\n` +
      `💰 *Total Price:* GHS ${currentPrice}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="p-4 font-sans">
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100">
        {/* Header Image - Cupcake specific */}
        <div className="relative h-48">
          <img
            src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=1000"
            alt="Cupcakes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
            <h2 className="text-white text-2xl font-black tracking-tight leading-none">
              Cupcake Box
            </h2>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleOrder} className="p-6 space-y-4 md:space-y-1">
          <input
            required
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 bg-gray-50 rounded-xl outline-none text-sm border focus:border-pink-300"
            onChange={handleChange}
          />

          <div className="grid grid-cols-2 gap-3">
            {/* Quantity Dropdown */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                Quantity
              </label>
              <select
                name="quantity"
                className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none"
                onChange={handleChange}
              >
                {Object.keys(CUPCAKE_PRICES).map((qty) => (
                  <option key={qty}>{qty}</option>
                ))}
              </select>
            </div>

            {/* Flavor Dropdown */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                Flavor
              </label>
              <select
                name="flavor"
                className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none"
                onChange={handleChange}
              >
                <option>Creamy Vanilla</option>
                <option>Red Velvet</option>
                <option>Chocolate</option>
                <option>Cookies and Cream</option>
                <option>Mixed flavors</option>
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
              Delivery Date
            </label>
            <input
              required
              type="date"
              name="date"
              className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none"
              onChange={handleChange}
            />
          </div>

          <div className="pt-2 border-t border-gray-50">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase">
                  Total Estimate
                </span>
                <span className="text-2xl md:text-xl font-black text-gray-800">
                  GHS {currentPrice}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-300 hover:bg-green-800 text-white font-bold py-4 md:py-2 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-green-100 active:scale-95 transition-all"
            >
              Order On WhastApp{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CupcakeCard;
