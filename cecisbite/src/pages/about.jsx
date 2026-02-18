import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function About() {
  return (
    <>
      <section className="pt-17">
        <div className="w-full h-[30vh] relative mb-20 flex justify-center items-center">
          <img
            src="/images/aboutheading.webp"
            alt="about banner"
            className="w-full h-full object-cover inset-0 absolute"
          />
          <div className="bg-black/40 inset-0 w-full z-20 absolute h-full" />
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-6xl text-center text-white relative z-30 font-playfair font-bold"
          >
            About Ceci's Bite
          </motion.h1>
        </div>
      </section>
      <section>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl text-center font-bold mb-10 text-primary"
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center px-6 md:px-16 text-lg font-medium text-gray-700 font-sans"
        >
          Ceci’s Bite was founded in May 2023 as a home bakery driven by a
          passion for creating delicious, high-quality baked goods. What began
          as a small kitchen dream quickly grew into a trusted brand known for
          excellence, consistency, and love in every bite. As demand grew, so
          did the vision. In 2024, Ceci’s Bite expanded into training and
          mentorship, welcoming its first two students. Through dedication,
          hands-on teaching, and a commitment to empowering others, the brand
          has since trained about 20 students, many of whom are now building
          their own successful baking journeys. To support this growing mission,
          Ceci’s Bite secured a larger space with a classroom capacity of 20
          students and officially moved into a bigger shop located at Kasoa,
          Krispol City. This milestone marks a new chapter of growth, learning,
          and impact as Ceci’s Bite continues to inspire and nurture the next
          generation of bakers.
        </motion.p>

        <div className="flex flex-col md:flex-row mt-16 gap-10 md:gap-0 px-6 bg-amber-50 py-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-center mb-4 text-secondary"
            >
              Our Mission
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center px-6 md:px-16 text-lg font-medium text-gray-700 font-sans"
            >
              To create delicious, beautifully crafted baked goods while
              empowering aspiring bakers through hands-on training, mentorship,
              and a supportive learning environment.
            </motion.p>
          </div>
          <div className="h-32 w-1 bg-gray-300 hidden md:block" />
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-center mb-4 text-secondary"
            >
              Our Vision
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center px-6 md:px-16 text-lg font-medium text-gray-700 font-sans"
            >
              To become a trusted bakery and training hub, known for quality,
              creativity, and impact, inspiring bakers and bringing joy to every
              celebration we serve.
            </motion.p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-6 md:p-16 md:gap-8 justify-center">
          <div className="flex-1 ">
            <motion.img
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              src="/images/founder.webp"
              alt="Founder"
              className="w-full h-full md:h-135 object-cover rounded-3xl"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 items-center md:items-start justify-center md:justify-start  flex flex-col"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="border border-gray-400 p-2 text-center inline-block mt-16 md:mt-5 rounded-3xl "
            >
              Meet Our Founder
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl text-center md:text-left mt-4 font-bold text-secondary uppercase"
            >
              Cecilia Love Dogbey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="font-extrabold text-center md:text-left text-2xl mt-4 md:my-8"
            >
              {" "}
              Hello!
            </motion.p>{" "}
            <br />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              I am the Founder and Head Chef of Ceci’s Bite, and I welcome you
              to my world of baking where passion meets creativity and purpose.
              What began as a love for crafting sweet and savory delights has
              grown into a brand dedicated not only to creating exceptional
              baked goods, but also to empowering others through our Baking
              School. At Ceci’s Bite, every creation is thoughtfully prepared
              with quality, care, and a touch of love. From beautiful
              celebration cakes to hands-on baking training, our mission is to
              create memorable experiences and inspire the next generation of
              bakers. Join us as we continue spreading sweetness, one cake at a
              time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.7 }}
              viewport={{ once: true }}
              className="flex gap-2"
            >
              <Link to="/menu">
                <button className="py-2 px-5 bg-secondary text-white font-bold font-inter rounded-xl hover:cursor-pointer transition-all mt-8">
                  Check out menu
                </button>
              </Link>
              <Link to="/school">
                <button className="py-2 px-5 bg-primary text-white font-bold font-inter rounded-lg hover:cursor-pointer transition-all mt-8">
                  Explore Our Baking School
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
