import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: null,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.user_name.trim())
      newErrors.user_name = "Name is required";

    if (!formData.user_email.trim()) {
      newErrors.user_email = "Email is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)
    ) {
      newErrors.user_email = "Invalid email format";
    }

    if (!formData.user_message.trim())
      newErrors.user_message = "Message cannot be empty";

    return newErrors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully 🚀");

      setFormData({
        user_name: "",
        user_email: "",
        user_message: "",
      });

    } catch (error) {
      console.error(error);
      setErrors({ general: "Failed to send message ❎" });
    } finally {
      setLoading(false);
    }
  };

  const year = new Date().getFullYear();

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#0f0f0f] text-white flex items-center px-6 sm:px-10 md:px-20 py-16 font-fira-sans"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-pink-500">Touch</span>
          </h2>

          <p className="text-gray-300 mb-8 text-sm sm:text-base md:text-lg">
            Have a project idea or just want to connect? Feel free to reach
            out. I’m always open to exciting opportunities.
          </p>

          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/amlan09-commits"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/amlan-mohapatra-6584503b3/"
              target="_blank"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/916370308546"
              target="_blank"
              className="hover:text-pink-500 transition duration-300"
            >
              <FaWhatsapp />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#1a1a1a] p-8 rounded-2xl border border-pink-500/20 shadow-xl space-y-4"
        >
          <div>
            <input
              type="text"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              placeholder="Your Name"
              className={`w-full p-3 rounded-lg bg-[#0f0f0f] border ${
                errors.user_name ? "border-red-500" : "border-gray-700"
              } focus:outline-none focus:border-pink-500 transition`}
            />
            {errors.user_name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.user_name}
              </p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`w-full p-3 rounded-lg bg-[#0f0f0f] border ${
                errors.user_email ? "border-red-500" : "border-gray-700"
              } focus:outline-none focus:border-pink-500 transition`}
            />
            {errors.user_email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.user_email}
              </p>
            )}
          </div>

          <div>
            <textarea
              rows="4"
              name="user_message"
              value={formData.user_message}
              onChange={handleChange}
              placeholder="Your Message"
              className={`w-full p-3 rounded-lg bg-[#0f0f0f] border ${
                errors.user_message ? "border-red-500" : "border-gray-700"
              } focus:outline-none focus:border-pink-500 transition`}
            ></textarea>
            {errors.user_message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.user_message}
              </p>
            )}
          </div>

          {errors.general && (
            <p className="text-red-500 text-sm">
              {errors.general}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 transition duration-300 rounded-xl shadow-lg shadow-pink-500/30 disabled:opacity-60 cursor-pointer"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>

      <div className="absolute bottom-4 left-0 w-full text-center text-gray-500 text-sm">
        © {year} Amlan Mohapatra. All Rights Reserved.
      </div>
    </section>
  );
};

export default Contact;