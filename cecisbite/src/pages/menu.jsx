import CakeOrderCard from "../components/cakeordercard";
import CupcakeCard from "../components/cupcakeordercard";
import ParfaitCard from "../components/cakeparfait";
import { motion } from "motion/react";

export default function Menu() {
  return (
    <>
      <section className="pt-17">
        <div className="w-full h-[30vh] relative mb-20 flex items-center">
          <img
            src="/images/menuhero.webp"
            alt="about banner"
            className="w-full h-full object-cover inset-0 absolute"
          />
          <div className="bg-black/50 inset-0 w-full z-20 absolute h-full" />

          {/* Added items-start here to prevent the button from stretching */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="px-8 relative z-30 flex flex-col gap-4 items-start"
          >
            <h1 className="text-6xl text-white z-30 font-cormorant font-bold">
              Our Menu
            </h1>
            <p className="text-white text-sm font-inter max-w-lg">
              Explore our delicious range of freshly baked cakes, crafted with
              quality ingredients and designed to make every celebration
              unforgettable.
            </p>
            <a
              href="https://wa.me/233248967727"
              className="text-black px-4 py-2 bg-white rounded-xl font-medium text-sm hover:bg-gray-100 transition-colors"
            >
              Order on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
      <section className="px-6 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl text-primary text-center font-extrabold font-poppins"
        >
          How to Order
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto font-poppins text-lg text-gray-700 mt-4"
        >
          We have made buying from us very simple. Follow these easy steps:
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-8 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex border border-gray-300 rounded-lg shadow-lg py-3 items-center "
          >
            <h2 className="text-primary p-10 text-5xl font-extrabold">1</h2>
            <p className="p-3 text-lg">
              Scroll down to what you want to purchase{" "}
              <span className="font-black">
                (cupcakes, Parfait, cakes or food packages)
              </span>
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex border border-gray-300 rounded-lg shadow-lg py-3 items-center "
          >
            <h2 className="text-primary p-10 text-5xl font-extrabold">2</h2>
            <p className="p-3 text-lg">
              Fill the Form. Prices are displayed beneath. So you get to see
              everything
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex border border-gray-300 rounded-lg shadow-lg py-3 items-center "
          >
            <h2 className="text-primary p-10 text-5xl font-extrabold">3</h2>
            <p className="p-3 text-lg">
              Tap “Order on WhatsApp” and your order details will appear in the
              chat. Just press send to continue. Want adjustments or have an
              inspiration photo? Feel free to message us, we’ll gladly help.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex border border-gray-300 rounded-lg shadow-lg py-3 items-center "
          >
            <h2 className="text-primary p-10 text-5xl font-extrabold">4</h2>
            <p className="p-3 text-lg">
              Confirm details and payment with our team
            </p>
          </motion.div>
        </div>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-xl text-center mt-8 font-inter text-secondary px-6 md:px-32"
        >
          Note: If you have allergies or want to mix flavors, please let us know
          in the WhatsApp chat before proceeding with payments. Your
          satisfaction and safety are our top priorities!.
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-base text-red-500 font-bold mt-5 italic"
        >
          Payment confirms Order!
        </motion.p>
      </section>
      <section className="px-1 md:px-16 py-16 mt-20 bg-gray-100">
        <section className="mt-10">
          <h1 className="text-center text-4xl text-primary font-bold font-playfair my-5 ">
            Parfait, Cupcakes & Cakes
          </h1>
          <p className=" text-secondary/70 font-poppins px-6 md:px-0 max-w-4xl text-center mx-auto mb-10">
            Planning a wedding cake, want a custom design, or not sure what cake
            fits your occasion? Message or call us — we’re happy to guide you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
            <ParfaitCard />
            <CupcakeCard />
            <CakeOrderCard />
          </div>
        </section>
        <section className="mt-20">
          <h1 className="text-center text-4xl text-primary font-bold font-playfair my-5">
            Food Packages
          </h1>
          <p className="text-center text-secondary/70 font-poppins max-w-4xl mx-auto mb-10">
            We offer a variety of food packages tailored to your needs. Whether
            you're planning a party, corporate event, or special occasion, we
            have the perfect package for you.
          </p>
        </section>
      </section>
    </>
  );
}
