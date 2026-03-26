import React, { useState } from "react";

const CakeOrderCard = () => {
  const PRICE_MATRIX = {
    Round: {
      "6 inches": {
        "1 layer": 300,
        "2 layers": 600,
        "3 layers": 800,
        "4 layers": 1100,
      },
      "7 inches": {
        "1 layer": 350,
        "2 layers": 700,
        "3 layers": 900,
        "4 layers": 1250,
      },
      "8 inches": {
        "1 layer": 400,
        "2 layers": 750,
        "3 layers": 1000,
        "4 layers": 1350,
      },
      "10 inches": {
        "1 layer": 500,
        "2 layers": 900,
        "3 layers": 1250,
        "4 layers": 1500,
      },
      // No 12 inches for Round as requested
    },
    Square: {
      "6 inches": {
        "1 layer": 350,
        "2 layers": 700,
        "3 layers": 950,
      },
      // No 7 inches for Square as requested
      "8 inches": {
        "1 layer": 500,
        "2 layers": 900,
        "3 layers": 1300,
      },
      "10 inches": {
        "1 layer": 700,
        "2 layers": 1250,
        "3 layers": 1600,
      },
      "12 inches": { "1 layer": 900, "2 layers": 1400, "3 layers": 1950 }, // No 4 layers for 12" Square
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

  // Helper to get dynamic lists based on selection
  const availableSizes = Object.keys(PRICE_MATRIX[formData.shape]);
  const availableLayers = PRICE_MATRIX[formData.shape][formData.size]
    ? Object.keys(PRICE_MATRIX[formData.shape][formData.size])
    : [];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      const newState = { ...prev, [name]: value };

      // Reset Size if switching shapes and current size doesn't exist in new shape
      if (name === "shape") {
        newState.size = Object.keys(PRICE_MATRIX[value])[0];
        newState.layers = Object.keys(PRICE_MATRIX[value][newState.size])[0];
      }

      // Reset Layers if switching sizes and current layer count doesn't exist
      if (name === "size") {
        newState.layers = Object.keys(PRICE_MATRIX[prev.shape][value])[0];
      }

      return newState;
    });
  };

  const currentPrice =
    PRICE_MATRIX[formData.shape][formData.size]?.[formData.layers] || 0;

  const handleOrder = (e) => {
    e.preventDefault();
    const message =
      `*NEW CAKE ORDER - CECI'S BITE* 🎂\n\n` +
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
    <div className="p-4 font-sans">
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 transition-all">
        <div className="relative h-48">
          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=1000"
            alt="Cake Header"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
            <h2 className="text-white text-2xl font-black tracking-tight leading-none">
              Custom cake Order
            </h2>
          </div>
        </div>

        <form onSubmit={handleOrder} className="p-6 space-y-4">
          <input
            required
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full p-3 bg-gray-50 rounded-xl outline-none text-sm border focus:border-pink-300"
            onChange={handleChange}
          />

          <div className="flex gap-2">
            {["Round", "Square"].map((s) => (
              <button
                key={s}
                type="button"
                className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${formData.shape === s ? "bg-pink-500 text-white border-pink-500" : "bg-gray-50 text-gray-400 border-transparent"}`}
                onClick={() =>
                  handleChange({ target: { name: "shape", value: s } })
                }
              >
                {s} Cake
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                Size
              </label>
              <select
                name="size"
                className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none"
                onChange={handleChange}
                value={formData.size}
              >
                {availableSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
                Layers
              </label>
              <select
                name="layers"
                className="w-full p-3 bg-gray-50 rounded-xl text-sm outline-none"
                onChange={handleChange}
                value={formData.layers}
              >
                {availableLayers.map((layer) => (
                  <option key={layer} value={layer}>
                    {layer}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase ml-1">
              Required Date
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
                <span className="text-2xl font-black text-gray-800">
                  GHS {currentPrice}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg active:scale-95 transition-all"
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
