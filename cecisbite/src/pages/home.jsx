import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen pt-10">
        <div className="absolute inset-0 bg-[url(/images/hero.webp)] bg-cover bg-center bg-zinc-900">
          <div className="bg-black/40 absolute inset-0" />
        </div>

        {/* Parent only handles Opacity to avoid "fighting" the children's movement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col justify-center items-center md:items-start h-full px-10 md:max-w-7xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-white text-center md:text-left text-5xl md:text-7xl font-bold font-playfair md:leading-tight"
          >
            Every bite tells a story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-white text-xl md:text-2xl text-center md:text-left mt-6 md:max-w-xl font-Poppins"
          >
            Custom cakes and hands-on baking classes made to inspire sweet
            moments.
          </motion.p>

          {/* Changed <div> to <motion.div> and simplified props */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: 0.7,
            }}
            className="flex flex-col md:flex-row gap-3 mt-10"
          >
            <Link
              to="/about"
              className="text-white text-lg text-center font-inter px-8 py-4 border-2 border-primary bg-primary hover:bg-white hover:text-primary transition-all rounded-2xl font-Poppins"
            >
              Order a Cake
            </Link>
            <Link
              to="/school"
              className="text-white text-center font-inter border-2 border-primary bg-primary px-8 py-4 text-lg hover:bg-white hover:text-primary transition-all rounded-2xl font-Poppins"
            >
              Join Our Baking Class
            </Link>
          </motion.div>
        </motion.div>
      </section>
      <section className="mt-8 md:mt-16 p-6 md:p-16">
        {/*Brief intro text*/}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }} // Triggers slightly before it enters center screen
          transition={{ duration: 0.8 }}
          className="text-center text-3xl md:text-4xl font-bold font-playfair text-primary"
        >
          Welcome to Ceci's Bite - Where Every Bite is a Delight!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-7xl mx-auto text-center text-lg font-Poppins"
        >
          Ceci’s Bite began as a small home bakery in May 2023, built on
          passion, creativity, and a love for quality baking. Today, we are a
          trusted cake brand and a growing training hub, creating beautiful
          cakes while empowering the next generation of bakers. From birthdays
          and weddings to hands-on baking classes, every experience at Ceci’s
          Bite is crafted with care, consistency, and excellence.
        </motion.p>
      </section>
      <section className="bg-primary/10 py-16 px-10">
        {/*Best-Selling Cakes*/}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold font-playfair text-secondary"
        >
          Our Best Selling Cakes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-6xl mx-auto text-center"
        >
          These are some of our most-loved cakes, carefully crafted to look
          stunning and taste unforgettable.
        </motion.p>
        {/* Put some of the purchaseable cakes here*/}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-8">
          <motion.img
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            src="/images/p1.webp"
            alt="cake image"
            className="w-full h-64 object-cover"
          />
          <motion.img
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            src="/images/p2.jpg"
            alt="cupcake image"
            className="w-full h-64 object-cover"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            src="/images/p3.webp"
            alt="cake parfait image"
            className="w-full h-64 object-cover"
          />
          <motion.img
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            src="/images/p4.webp"
            alt="food package image"
            className="w-full h-64 object-cover"
          />
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            src="/images/p5.webp"
            alt="food package image"
            className="w-full h-64 object-cover"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            src="/images/p6.webp"
            alt="food package image"
            className="w-full h-64 object-cover"
          />
        </div>
        <Link to="/menu" className="block text-center mt-8">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white bg-primary px-8 py-4 text-lg hover:bg-primary/90 transition-all rounded-2xl font-Poppins"
          >
            Explore Our Menu
          </motion.button>
        </Link>
      </section>
      <section className="py-16 px-10">
        {/*Baking Classes*/}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold font-playfair text-primary"
        >
          Learn to Bake with Confidence
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-6 max-w-6xl mx-auto text-center"
        >
          In 2024, Ceci’s Bite expanded into training and mentorship, helping
          aspiring bakers turn passion into skill. Our hands-on baking classes
          are designed for beginners and growing bakers who want real, practical
          experience. With a dedicated classroom that accommodates up to 20
          students, we provide a supportive learning environment where
          creativity and confidence grow.
        </motion.p>
        {/* Put images of students here*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-8"
        >
          <img
            src="/images/student1.webp"
            alt="graduation image"
            className="w-full h-full object-cover"
          />
          <img
            src="/images/student2.webp"
            alt="graduation image"
            className="w-full object-cover"
          />
          <img
            src="/images/student3.webp"
            alt="graduation image"
            className="w-full h-full object-cover"
          />
          <img
            src="/images/gradpledge.webp"
            alt="graduation image"
            className="w-full h-full object-cover"
          />
          <img
            src="/images/gradpledge2.webp"
            alt="graduation image"
            className="w-full h-full object-cover"
          />
          <img
            src="/images/gradgift.webp"
            alt="graduation image"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <Link to="/school" className="block text-center mt-8">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white bg-primary px-8 py-4 text-lg hover:bg-primary/90 transition-all rounded-2xl font-Poppins"
          >
            Explore Classes
          </motion.button>
        </Link>
      </section>
    </>
  );
}
