import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-[#0f0f0f] text-white flex items-center px-6 sm:px-10 md:px-20 py-16 font-fira-sans"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500 blur-3xl opacity-20 rounded-2xl"></div>

            <img
              src="/your-image.jpg"
              alt="Amlan"
              className="relative w-56 sm:w-64 md:w-72 lg:w-80 xl:w-96 rounded-2xl border border-pink-500/30 shadow-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-fira-sans">
            About <span className="text-pink-500">Me</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base md:text-lg font-fira-sans">
            Hi, I’m Amlan 👋 A passionate web developer who loves building
            interactive and animated web experiences using React and modern
            technologies.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg font-fira-sans">
            My goal is to build impactful digital products and always try to be a better version of myself. I’m constantly learning and pushing myself
            forward.
          </p>

          <button className="mt-8 px-6 py-3 bg-pink-500 hover:bg-pink-600 transition duration-300 rounded-xl shadow-lg shadow-pink-500/30 cursor-pointer font-fira-sans">
            Download CV
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;