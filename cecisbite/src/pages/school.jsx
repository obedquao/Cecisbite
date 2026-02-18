import schoolHero from "../assets/images/schoolHero.webp";
import { motion } from "motion/react";

export default function School() {
  return (
    <>
      {/* Added 'relative' here so the absolute divs stay inside this section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Changed 'cover' to 'object-cover' */}
        <img
          src={schoolHero}
          alt="school page hero image"
          className="w-full h-full object-cover"
        />

        {/* Changed 'inset-full' to 'inset-0' for the dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Changed 'inset-full' to 'inset-0' and added centering classes */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-6xl font-extrabold mb-4 font-playfair"
          >
            From Passion to Profession
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white text-lg md:text-xl max-w-2xl"
          >
            Turn your passion for baking into real skill with hands-on training
            at Ceci’s Bite Baking School.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row mt-10  gap-5"
          >
            <a
              href="tell:+233248967727"
              className="  text-white py-2 px-12 border border-secondary bg-secondary rounded-lg font-bold text-lg hover:bg-secondary/10 transition duration-300"
            >
              Call Us
            </a>
            <a
              href="https://wa.me/233248967727"
              className="  text-white py-2 px-12 border border-secondary bg-secondary rounded-lg  font-bold text-lg hover:bg-secondary/10 transition duration-300"
            >
              whatsApp Us
            </a>
          </motion.div>
        </div>
      </section>
      <section className="px-6 md:px-32 my-10  md:mx-20 md:border border-gray-500 md:py-24 flex flex-col md:flex-row gap-15 md:gap-10 items-center justify-center rounded-2xl">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-montserrat font-bold text-3xl text-primary text-center md:text-left"
          >
            About Our Baking Classes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="font-inter text-base mt-4 text-black/90 text-center md:text-left"
          >
            Ceci’s Bite expanded into training and mentorship in 2024 with a
            vision to empower aspiring bakers. What started with just two
            students has grown into a thriving learning community, with about 20
            students trained and many now confidently building their own baking
            journeys. Our baking school is designed to provide practical,
            real-world experience in a supportive and inspiring environment.
            With a dedicated classroom that accommodates up to 20 students, we
            ensure every student gets personal guidance and attention.
          </motion.p>
        </div>
        <div className="h-65 w-0.5  bg-gray-400 hidden md:block" />
        <div className="flex-1 ">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-extrabold font-montserrat text-3xl text-primary text-center md:text-left"
          >
            What You Will Learn
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 font-inter text-base text-black/90 text-center md:text-left"
          >
            Our classes are hands-on and practical. Students learn:
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-2  mt-3 list-inside list-disc text-gray-700 font-inter"
          >
            <li className="">Cake baking fundamentals</li>
            <li>Professional cake decorating techniques</li>
            <li>Buttercream and fondant finishing</li>
            <li>Cake structuring and stacking</li>
            <li>Pricing and starting a baking business</li>
            <li>Hygiene and kitchen best practices</li>
          </motion.ul>
        </div>
      </section>
      <section className="mt-10 bg-gray-100 py-20">
        <h1 className="text-4xl text-primary font-inter font-bold  text-center">
          Why Train with Ceci’s Bite?
        </h1>
        <p className="text-center text-lg mt-4 text-gray-700 font-inter px-6 md:px-32 mb-10">
          We don’t just teach recipes — we teach skills that last, equipping you
          with the knowledge, confidence, and practical experience needed to
          grow and succeed in your baking journey.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center px-24">
          <li className="flex bg-white  flex-col h-110 w-90 group overflow-hidden text-white rounded-2xl shadow-lg">
            <img
              src="/images/hands.webp"
              alt="care image"
              className="object-cover w-full h-68 group-hover:scale-110 transition-transform duration-700 ease-in-out "
            />
            <div className=" flex  flex-col  justify-end px-5 pt-2 pb-5 gap-3 ">
              <h2 className="text-primary font-bold text-xl font-inter">
                Hands-On Practical Training
              </h2>
              <p className="text-gray-700 text-base font-inter ">
                You don’t just watch, you bake. Every class is structured around
                real practice so you gain confidence through doing, not just
                observing.
              </p>
            </div>
          </li>
          <li className="flex bg-white  flex-col h-110 w-90 group overflow-hidden text-white rounded-2xl shadow-lg">
            <img
              src="/images/sc.webp"
              alt="care image"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out "
            />
            <div className=" flex  flex-col  justify-end px-5 pt-2 pb-5 gap-3 ">
              <h2 className="text-primary font-bold text-xl font-inter">
                Small Class Size
              </h2>
              <p className="text-gray-700 text-base font-inter ">
                With a maximum of 20 students per session, every learner
                receives personal attention, guidance, and meaningful feedback.
              </p>
            </div>
          </li>
          <li className="flex bg-white  flex-col h-110 w-90 group overflow-hidden text-white rounded-2xl shadow-lg">
            <img
              src="/images/realworld.webp"
              alt="care image"
              className="object-cover w-full h-68 group-hover:scale-110 transition-transform duration-700 ease-in-out "
            />
            <div className=" flex  flex-col  justify-end px-5 pt-2 pb-5 gap-3 ">
              <h2 className="text-primary font-bold text-xl font-inter">
                Real World Baking Skills
              </h2>
              <p className="text-gray-700 text-base font-inter ">
                We teach techniques used in real customer orders — from cake
                structuring to professional finishing — preparing you for actual
                baking jobs and businesses.
              </p>
            </div>
          </li>
          <li className="flex bg-white  flex-col h-110 w-90 group overflow-hidden text-white rounded-2xl shadow-lg">
            <img
              src="/images/pricing.webp"
              alt="care image"
              className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out "
            />
            <div className=" flex  flex-col  justify-end px-5 pt-2 pb-5 gap-3 ">
              <h2 className="text-primary font-bold text-xl font-inter">
                Business and Pricing Guidance
              </h2>
              <p className="text-gray-700 text-base font-inter ">
                Beyond baking, we equip you with knowledge on pricing, branding,
                and starting your own baking business so you can turn skill into
                income.
              </p>
            </div>
          </li>
          <li className="flex bg-white  flex-col h-110 w-90 group overflow-hidden text-white rounded-2xl shadow-lg">
            <img
              src="/images/Supportive.webp"
              alt="care image"
              className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700 ease-in-out "
            />
            <div className=" flex  flex-col justify-end px-5 pt-2 pb-5 gap-3 ">
              <h2 className="text-primary font-bold text-xl font-inter">
                Supportive Learning Environment
              </h2>
              <p className="text-gray-700 text-base font-inter ">
                We create a positive and encouraging space where questions are
                welcomed, creativity is nurtured, and confidence grows.
              </p>
            </div>
          </li>
          <li className="flex bg-white  flex-col h-110 w-90 group overflow-hidden text-white rounded-2xl shadow-lg">
            <img
              src="/images/beginner.webp"
              alt="care image"
              className="object-cover w-full h-64 group-hover:scale-110 transition-transform duration-700 ease-in-out "
            />
            <div className=" flex  flex-col  justify-end px-5 pt-2 pb-5 gap-3 ">
              <h2 className="text-primary font-bold text-xl font-inter">
                Structured Beginner-friendly Curriculum
              </h2>
              <p className="text-gray-700 text-base font-inter ">
                Whether you’re new or improving your skills, our step-by-step
                training makes complex techniques simple and achievable.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="py-20">
        <h1 className="text-center text-3xl md:text-4xl font-extrabold font-cormorant px-6 md:px-64   text-primary font">
          Highlights from Our Third Graduation Ceremony
        </h1>
        <p className="text-center px-6 md:px-32 my-4 text-lg text-gray-700  font-inter">
          At Ceci's Bite bakery school, we offer the best tuition and the
          graduation experience. Call us to enroll in our next baking class and
          learn to open a new business or just for the sake of baking
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 md:px-24 mt-10">
          <img src="/images/grad1.JPG" alt="graduation 1" loading="lazy" />
          <img src="/images/grad2.JPG" alt="graduation 2" loading="lazy" />
          <img src="/images/grad3.JPG" alt="graduation 3" loading="lazy" />
          <img src="/images/grad4.JPG" alt="graduation 4" loading="lazy" />
          <img src="/images/grad5.JPG" alt="graduation 5" loading="lazy" />
          <img src="/images/grad6.JPG" alt="graduation 6" loading="lazy" />
        </div>
        <a
          href="https://photos.google.com/share/AF1QipMxgiEPpBWgdwoMHpjF6VGu6v8LtyXcf5N-OQVZQ8BufXpv2qFZ3WgIGxmszHml4w?key=RVl3aFZvUndhdTd1Uk5SdTlDNHRyNDVyLUg0RkRB"
          className="text-primary underline text-center text-lg block"
        >
          {" "}
          View more{" "}
        </a>
      </section>
    </>
  );
}
