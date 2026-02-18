import React, { useState } from "react";

const CakeOrderCard = () => {
  // 1. Nested Price Matrix: [Shape][Size][Layers]
  const PRICE_MATRIX = {
    Round: {
      "6 inches": {
        "1 layer": 250,
        "2 layers": 500,
        "3 layers": 750,
        "4 layers": 950,
      },
      "7 inches": {
        "1 layer": 280,
        "2 layers": 550,
        "3 layers": 780,
        "4 layers": 1000,
      },
      "8 inches": {
        "1 layer": 350,
        "2 layers": 600,
        "3 layers": 850,
        "4 layers": 1150,
      },
      "10 inches": {
        "1 layer": 550,
        "2 layers": 800,
        "3 layers": 1050,
        "4 layers": 1300,
      },
      "12 inches": {
        "1 layer": 700,
        "2 layers": 1050,
        "3 layers": 1400,
        "4 layers": 1700,
      },
    },
    Square: {
      "6 inches": {
        "1 layer": 300,
        "2 layers": 650,
        "3 layers": 750,
        "4 layers": 850,
      },
      "7 inches": {
        "1 layer": 350,
        "2 layers": 700,
        "3 layers": 850,
        "4 layers": 1100,
      },
      "8 inches": {
        "1 layer": 450,
        "2 layers": 750,
        "3 layers": 900,
        "4 layers": 1150,
      },
      "10 inches": {
        "1 layer": 550,
        "2 layers": 950,
        "3 layers": 1200,
        "4 layers": 1300,
      },
      "12 inches": {
        "1 layer": 700,
        "2 layers": 1250,
        "3 layers": 1800,
        "4 layers": 2100,
      },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    shape: "Round",
    size: "6 inches",
    layers: "2 layers",
    date: "",
  });

  const WHATSAPP_NUMBER = "233248967727";

  // Dynamic lookup based on Shape, Size, and Layers
  const currentPrice =
    PRICE_MATRIX[formData.shape][formData.size][formData.layers];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    const message =
      `*NEW CUP CAKE ORDER - CECI'S BITE* 🎂\n\n` +
      `👤 *Customer:* ${formData.name}\n` +
      `🟦 *Shape:* ${formData.shape}\n` +
      `📏 *Size:* ${formData.size}\n` +
      `🥞 *Height:* ${formData.layers}\n` +
      `📅 *Date:* ${formData.date}\n` +
      `💰 *Total Price:* GHS ${currentPrice}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="p-4 font-sans ">
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 transition-all">
        {/* Header Image */}
        <div className="relative h-48">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1000"
            alt="Cake Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
            <h2 className="text-white text-2xl font-black tracking-tight leading-none">
              Custom cake Order
            </h2>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleOrder} className="p-6 space-y-4 ">
          {/* Name Input */}
          <input
            required
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 md:p-1 bg-gray-50 rounded-xl outline-none text-sm border focus:border-pink-300 transition-all"
            onChange={handleChange}
          />

          {/* Shape Selector (Toggle buttons look better on cards) */}
          <div className="flex gap-2">
            {["Round", "Square"].map((s) => (
              <button
                key={s}
                type="button"
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${formData.shape === s ? "bg-pink-500 text-white border-pink-500" : "bg-gray-50 text-gray-400 border-transparent"}`}
                onClick={() => setFormData({ ...formData, shape: s })}
              >
                {s} Cake
              </button>
            ))}
          </div>

          {/* Size & Layers */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                Size
              </label>
              <select
                name="size"
                className="w-full p-3 md:p-1 bg-gray-50 rounded-xl text-sm outline-none"
                onChange={handleChange}
              >
                {Object.keys(PRICE_MATRIX["Round"]).map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                Layers
              </label>
              <select
                name="layers"
                className="w-full p-3 md:p-1 bg-gray-50 rounded-xl text-sm outline-none"
                onChange={handleChange}
                value={formData.layers}
              >
                <option>1 layer</option>
                <option>2 layers</option>
                <option>3 layers</option>
                <option>4 layers</option>
              </select>
            </div>
          </div>

          {/* Date */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
              Required Date
            </label>
            <input
              required
              type="date"
              name="date"
              className="w-full p-3 md:p-1 bg-gray-50 rounded-xl text-sm outline-none"
              onChange={handleChange}
            />
          </div>

          {/* Price & Action */}
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
              <span className="bg-pink-100 text-pink-600 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                {formData.shape}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 md:py-2 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-green-100 active:scale-95 transition-all"
            >
              Order via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CakeOrderCard;
