import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#0f0f0f] text-white flex items-center px-6 sm:px-10 md:px-20 py-16"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 font-fira-sans">
            Get In <span className="text-pink-500">Touch</span>
          </h2>

          <p className="text-gray-300 mb-8 text-sm sm:text-base md:text-lg font-fira-sans">
            Have a project idea or just want to connect? Feel free to reach
            out. I’m always open to exciting opportunities.
          </p>

          <div className="flex gap-6 text-2xl font-fira-sans">
            <a href="https://github.com/amlan09-commits" className="hover:text-pink-500 transition duration-300">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-pink-500 transition duration-300">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-pink-500 transition duration-300">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#1a1a1a] p-8 rounded-2xl border border-pink-500/20 shadow-xl space-y-6 font-fira-sans"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#0f0f0f] border border-gray-700 focus:outline-none focus:border-pink-500 transition font-fira-sans"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-[#0f0f0f] border border-gray-700 focus:outline-none focus:border-pink-500 transition font-fira-sans"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-[#0f0f0f] border border-gray-700 focus:outline-none focus:border-pink-500 transition font-fira-sans"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 transition duration-300 rounded-xl shadow-lg shadow-pink-500/30 font-fira-sans cursor-pointer"
          >
            Send Message
          </button>
        </motion.form>

      </div>

      <div className="absolute bottom-4 left-0 w-full text-center text-gray-500 text-sm font-fira-sans">
          © {year} Amlan Mohapatra. All Rights Reserved.
      </div>
    </section>
  );
};

export default Contact;