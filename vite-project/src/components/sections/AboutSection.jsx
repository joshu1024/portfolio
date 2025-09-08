import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { containerVariants, itemVariants } from "../../utils/helper.js";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data.js";
import SIGNATURE from "../../assets/images/signature.svg";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const timeLineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timeLineInView = useInView(timeLineRef, {
    once: true,
    margin: "-50px",
  });
  const scrollToSection = (sectionId) => {
    console.log("Scrolling to:", sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      console.warn("Element not found:", sectionId);
    }
  };
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const timeLineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChikdren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section
      id="about"
      ref={sectionRef}
      className={`px-6 py-8 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      <motion.div style={y} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            } mb-4`}
          >
            Get to Know Me
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            About <span className="text-blue-500 font-medium">Me</span>
          </motion.h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-800/50  border-gray-700 backdrop-blur-sm"
                  : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-2xl font-medium mb-6">My Mission</h3>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I believe in technology as a tool for impact — to connect
                people, solve problems, and create meaningful experiences. I’m
                passionate about building digital solutions that are functional,
                intuitive, and accessible to everyone.
              </p>
              <p
                className={`text-base leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Outside of coding, I explore new JavaScript tools to grow as a
                full-stack developer, using technologies like React, Node.js,
                and ClipDrop APIs to build dynamic and practical web solutions.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="">
              <h3 className="text-xl mb-6 font-medium">What i love building</h3>
              <div className="grid gap-4">
                {PASSIONS.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 rounded-xl ${
                      isDarkMode
                        ? "bg-gray-800/30 hover:bg-gray-800/50  "
                        : "bg-gray-50/50 hover:bg-gray-100/50"
                    } transition-all duration-300`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDarkMode ? "bg-gray-700" : "bg-white"
                      }`}
                    >
                      <passion.icon size={20} className="text-blue-500" />
                    </div>
                    <div className="">
                      <h4 className="font-medium mb-1">{passion.title}</h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {passion.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center py-8">
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-4`}
              >
                Crafted with passion by
              </div>
              <div className="flex justify-center ">
                <a
                  href="https://www.linkedin.com/in/joshua-kipamet-148698140/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <img
                    src={SIGNATURE}
                    alt="Signature"
                    className="h-12 w-auto"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.section
            ref={timeLineRef}
            initial="hidden"
            animate={timeLineInView ? "visible" : "hidden"}
            variants={timeLineVariants}
            className="relative"
          >
            <h3 className="text-2xl font-medium mb-8 text-center lg:text-left">
              My Developer Journey
            </h3>
            <div
              className={`absolute left-8 top-16 bottom-0 w-px ${
                isDarkMode ? "bg-gray-700" : "bg-gray-300"
              }`}
            />

            <div className="space-y-8">
              {JOURNEY_STEPS.map((step, index) => (
                <motion.div
                  key={step.year}
                  variants={stepVariants}
                  whileHover={{ x: 4 }}
                  className="relative flex items-start space-x-6 group"
                >
                  <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon size={24} className="text-white" />
                  </div>
                  <div
                    className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70"
                        : "bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white"
                    } backdrop-blur-sm`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-medium">{step.title}</h4>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {step.year}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      } mb-3`}
                    >
                      {step.company}
                    </div>
                    <p
                      className={`text-sm leading-relaxed ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="text-center mb-5"
              >
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col items-center space-y-6"
                >
                  <p
                    className={`text-lg ${
                      isDarkMode ? "text-gray-400" : " text-gray-600"
                    } mb-16`}
                  >
                    Ready to bring your ideas to life ?
                  </p>
                  <motion.button
                    onClick={() => scrollToSection("contact")}
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-blue-500 cursor-pointer hover:bg-blue-600 rounded-full px-8 py-3 text-sm uppercase tracking-widest font-medium transition-all duration-300"
                  >
                    Let's Work Together
                  </motion.button>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
