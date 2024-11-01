import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FaCode, FaGift, FaLaptopCode } from "react-icons/fa";
import GetStartedButton from "../../components/GetStartedButton";
import Stats from "../../components/Home/Stats";
import { AiOutlineSolution } from "react-icons/ai";
import learning from "../../assets/learning.svg";
import CustomButton from "../../components/CustomButton";
import footerWave from "../../assets/footerWave.svg";
import bg from "../../assets/bg.jpg";
import wave from "../../assets/wave.svg";
import wave2 from "../../assets/wave2.svg";
import devTeam from "../../assets/devTeam.svg";
import OurTechStack from "../../components/Home/OurTechStack";
import { Helmet } from "react-helmet";
import "./Home.css";

const backgroundImages = [wave, bg, wave2];

function Home() {
  const [bgIndex, setBgIndex] = useState(0);
  const [currentBg, setCurrentBg] = useState(backgroundImages[0]);

  const fadeInFromLeft = {
    hidden: { opacity: 0, x: -70 }, // Start off the left side
    visible: { opacity: 1, x: 0 }, // End at its original position
  };

  const fadeInFromRight = {
    hidden: { opacity: 0, x: 70 }, // Start off the right side
    visible: { opacity: 1, x: 0 }, // End at its original position
  };

  const sectionRefs = Array.from({ length: 5 }, () => useRef(null));
  const inViewStates = sectionRefs.map((ref) => useInView(ref, { once: true }));

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
      setCurrentBg(backgroundImages[bgIndex]);
      console.log(bgIndex);
    }, 2000);
    clearInterval(interval);
  }, [bgIndex]);
  return (
    <>
      <Helmet>
        <title>Bookmie Devs - Home</title>
        <meta
          name="description"
          content="Get started building your dream projects with developers with a track record of delivering the best software."
        />
      </Helmet>
      <div className="dark:bg-slate-800 bg-slate-100">
        <hr />

        {/* Section 1 */}
        <motion.div
          initial="hidden"
          animate={inViewStates[0] ? "visible" : "hidden"}
          variants={fadeInFromLeft} // Fade in from the left
          transition={{ duration: 1.0 }}
          style={{ backgroundImage: `url(${currentBg})` }}
          className="flex flex-col sm:flex-row justify-between mb-5 items-center bg-opacity-5 px-1 sm:px-16 py-1"
          ref={sectionRefs[0]}
        >
          <div className="px-3 py-20 sm:py-32 flex flex-col rounded-lg">
            <motion.div variants={fadeInFromLeft}>
              <p className="text-5xl text-center font-semibold dark:text-slate-100 mb-5 text-slate-800">
                Get Started with Bookmie
              </p>
              <p className="text-xl text-center text-slate-800 font-mono dark:text-slate-100 sm:text-start">
                Get started building your dream projects with developers with a
                track record of delivering the best software.
              </p>
            </motion.div>
            <div className="flex space-y-4 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row">
              <GetStartedButton />
              <CustomButton
                to="https://github.com/Bookmie-Devs"
                name="Open Source Projects"
              />
            </div>
          </div>
          <motion.div variants={fadeInFromLeft}>
            <img
              className="animate-pulse"
              src={devTeam}
              alt="Development Team"
            />
          </motion.div>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial="hidden"
          animate={inViewStates[1] ? "visible" : "hidden"}
          variants={fadeInFromRight} // Fade in from the right
          transition={{ duration: 0.6 }}
          ref={sectionRefs[1]}
        >
          <p className="text-center text-3xl text-white font-bold mb-5">
            We Specialize in . . .
          </p>
          <OurTechStack />
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial="hidden"
          animate={inViewStates[2] ? "visible" : "hidden"}
          variants={fadeInFromLeft} // Fade in from the left
          transition={{ duration: 0.7 }}
          className="px-6 sm:px-21 py-8 flex flex-col space-y-12 sm:flex-row items-center sm:space-y-3"
          ref={sectionRefs[2]}
        >
          <div className="p-2 flex w-full space-y-10 flex-col">
            <div>
              <p className="text-5xl text-slate-100 font-bold">Why Bookmie?</p>
            </div>
            <div>
              <p className="text-slate-800 dark:text-white">
                An online all-in-one platform that allows Teachers, developers,
                and tutors to set coding exams, and students to take those
                exams, with automatic grading.
              </p>
            </div>
            <div>
              <GetStartedButton />
            </div>
          </div>
          <motion.div variants={fadeInFromLeft}>
            <img src={learning} alt="Learning" />
          </motion.div>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          initial="hidden"
          animate={inViewStates[3] ? "visible" : "hidden"}
          variants={fadeInFromRight} // Fade in from the right
          transition={{ duration: 0.8 }}
          className="px-10 bg-slate-800 outline outline-yellow-400 shadow-md shadow-yellow-400 dark:bg-slate-100 mb-4"
          ref={sectionRefs[3]}
        >
          <div className="px-3 py-7 flex justify-evenly space-y-10 sm:space-y-0 flex-col sm:flex-row m-2 rounded-lg">
            <Stats icon={<FaCode size={30} />} statName="Projects" />
            <Stats icon={<FaLaptopCode size={30} />} statName="Developers" />
            <Stats
              icon={<AiOutlineSolution size={30} />}
              statName="Solutions"
            />
            <Stats icon={<FaGift size={30} />} statName="Donors" />
          </div>
        </motion.div>

        {/* Section 5 */}
        <motion.div
          initial="hidden"
          animate={inViewStates[4] ? "visible" : "hidden"}
          variants={fadeInFromLeft}
          transition={{ duration: 0.9 }}
          style={{ backgroundImage: `url(${footerWave})` }}
          className="px-10 bg-slate-100 bg-center"
          ref={sectionRefs[4]}
        >
          <div className="px-2 py-5 flex sm:space-x-20 flex-col space-y-11 sm:space-y-0 sm:flex-row rounded-lg">
            <div>
              <img className="rounded-2xl" src="cimg1.webp" alt="Image 1" />
            </div>
            <div>
              <img
                className="rounded-2xl"
                src="coding_boy.svg"
                alt="Coding Boy"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
