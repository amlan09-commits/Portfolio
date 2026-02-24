import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiGit,
  SiGithub,
  SiPostman,
  SiVite,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <SiReact size={32} /> },
      { name: "JavaScript", icon: <SiJavascript size={32} /> },
      { name: "Tailwind", icon: <SiTailwindcss size={32} /> },
      { name: "HTML5", icon: <SiHtml5 size={32} /> },
      { name: "CSS3", icon: <SiCss3 size={32} /> },
      { name: "Vite", icon: <SiVite size={32} /> },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs size={32} /> },
      { name: "Express.js", icon: <SiExpress size={32} /> },
      { name: "MongoDB", icon: <SiMongodb size={32} /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <SiGit size={32} /> },
      { name: "GitHub", icon: <SiGithub size={32} /> },
      { name: "Postman", icon: <SiPostman size={32} /> },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#0f0f0f] text-white px-6 sm:px-10 md:px-20 py-20 font-fira-sans"
    >
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          My <span className="text-pink-500">Tech Stack</span>
        </motion.h2>

        <div className="space-y-16">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex}>
              
              <motion.h3
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold mb-8 text-pink-400"
              >
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                    }}
                    className="bg-[#1a1a1a] p-6 rounded-2xl border border-pink-500/10 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/30 transition duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer"
                  >
                    <div className="text-pink-500">
                      {skill.icon}
                    </div>
                    <p className="text-sm">{skill.name}</p>
                  </motion.div>
                ))}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;