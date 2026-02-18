import React, { useState } from "react";

const ParfaitCard = () => {
  // Fixed unit price
  const UNIT_PRICE = 50;

  const [formData, setFormData] = useState({
    name: "",
    flavor: "Red Velvet",
    quantity: 1,
    date: "",
  });

  const WHATSAPP_NUMBER = "233248967727";

  // Calculate total price: Quantity * 50
  const totalPrice = formData.quantity * UNIT_PRICE;

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Ensure quantity doesn't go below 1
    const updatedValue =
      name === "quantity" ? Math.max(1, parseInt(value) || 1) : value;
    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const message =
      `*NEW PARFAIT ORDER - CECI'S BITE* 🍨\n\n` +
      `👤 *Customer:* ${formData.name}\n` +
      `🍰 *Base Flavor:* ${formData.flavor}\n` +
      `🔢 *Quantity:* ${formData.quantity}\n` +
      `📅 *Date:* ${formData.date}\n` +
      `💰 *Total Price:* GHS ${totalPrice}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="p-4 font-sans">
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 transition-all">
        {/* Header Image */}
        <div className="relative h-48">
          <img
            src="/images/cakeparfait.webp"
            alt="Delicious Cake Parfait"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
            <div>
              <h2 className="text-white text-2xl font-black tracking-tight leading-none">
                Creamy Parfait
              </h2>
              <p className="text-purple-200 text-xs font-bold mt-1 uppercase">
                GHS 50.00 per cup
              </p>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleOrder} className="p-6 space-y-4 md:space-y-1">
          {/* Name Input */}
          <div className="space-y-1">
            <input
              required
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 bg-gray-50 rounded-xl outline-none text-sm border border-black focus:border-purple-300 transition-all"
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            {/* Flavor Selection */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                Base Flavor
              </label>
              <select
                name="flavor"
                className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none cursor-pointer"
                onChange={handleChange}
              >
                <option>Red Velvet</option>
                <option>Chocolate</option>
                <option>Vanilla</option>
                <option>Oreo</option>
              </select>
            </div>

            {/* Quantity Input */}
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                Quantity
              </label>
              <input
                required
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none border border-transparent focus:border-purple-300 transition-all"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Date Picker */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
              Pickup Date
            </label>
            <input
              required
              type="date"
              name="date"
              className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none border border-transparent focus:border-purple-300 transition-all"
              onChange={handleChange}
            />
          </div>

          {/* Price & Button */}
          <div className="pt-2 border-t border-gray-50">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">
                  Total Amount
                </span>
                <span className="text-3xl md:text-xl font-black text-gray-800">
                  GHS {totalPrice}
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] text-gray-400 font-bold uppercase italic">
                  Freshly Layered
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 active:scale-95 transition-all text-white font-bold py-4 md:py-2 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-purple-100"
            >
              Order On WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ParfaitCard;
