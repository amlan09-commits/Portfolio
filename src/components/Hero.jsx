import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-[#0f0f0f] text-white relative overflow-hidden font-fira-sans">

      <div className="absolute w-125 h-125 bg-pink-500/20 blur-[120px] rounded-full -top-25 -left-25 animated-orbs"/>
      <div className="absolute w-125 h-125 bg-cyan-500/20 blur-[120px] rounded-full -bottom-25 -right-25 animated-orbs"/>

      <div className="text-center z-10 px-6">
        
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold font-fira-sans pointer-events-none"
        >
          Hi, I'm <span className="text-pink-500">Amlan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-xl md:text-2xl text-gray-300 font-fira-sans lg:max-w-150 mx-auto pointer-events-none"
        >
          I am a full stack developer and I build modern & interactive webapps and websites.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-8 flex justify-center gap-6"
        >
          <button className="px-6 py-3 bg-pink-500 hover:bg-pink-600 rounded-xl font-semibold transition duration-300 shadow-lg shadow-pink-500/30 cursor-pointer"
          onClick={() => {
            document.getElementById("about").scrollIntoView({
              behavior: "smooth",
            });
          }}>
            About me
          </button>

          <button className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black rounded-xl font-semibold transition duration-300 cursor-pointer"
          onClick={() => {
            document.getElementById("contact").scrollIntoView({
              behavior: "smooth",
            });
          }}>
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;