import React from 'react';
import { FaDatabase, FaServer, FaReact, FaNodeJs, FaBootstrap, FaMobileAlt, FaJsSquare, FaCss3Alt, FaHtml5, FaPython, FaDownload } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { useSpring, animated } from '@react-spring/web';

// Function to return flags based on language
const getLanguageFlag = (language) => {
  switch (language) {
    case 'English':
      return '🇬🇧'; 
    case 'Malayalam':
      return '🇮🇳'; 
    // case 'Hindi':
    //   return '🇮🇳'; 
    case 'Tamil':
      return '🇮🇳'; 
    default:
      return '🌍'; 
  }
};

const About = () => {
  const proficiencyLevels = {
    English: 98,
    Malayalam: 100,
    Tamil: 85,
  };

  
  const getBarAnimation = (percentage) => useSpring({
    from: { width: '0%' },
    to: { width: `${percentage}%` },
    config: { duration: 1000 },
  });

  return (
    // <div className="flex items-center justify-center min-h-screen bg-gray-800 text-gray-200 py-12 px-6">
   
      <div className="min-h-screen flex flex-col bg-gray-900 shadow-xl py-20 px-6 bg-gradient-to-r from-gray-900 via-black to-grey-900">

        <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
        <p className="text-lg mb-6 leading-relaxed text-white">
          Hi, I'm Anvarsha K N, a highly motivated Full Stack Developer with a passion for innovation and problem-solving. With a background in Computer Science Engineering, I specialize in the MERN stack and have developed robust web applications that solve real-world problems.
        </p>
        <p className="text-lg mb-6 leading-relaxed text-white">
          I have hands-on experience in front-end and back-end development, having worked as a Front End Developer at Rawmax Media and as a MERN Stack Web Developer intern at Synnefo Solutions. My work involves creating user-friendly and responsive interfaces, ensuring cross-browser compatibility, and optimizing performance.
        </p>
        <p className="text-lg mb-6 leading-relaxed text-white">
          My key projects include a Driver Drowsiness Detection System using IoT and a Tracking Pedagogue Appearance Methodology, which demonstrate my ability to apply theoretical knowledge to real-world challenges. I'm always eager to learn new technologies and take on challenges that push the boundaries of my skills.
        </p>
        <h3 className="text-3xl font-semibold text-teal-400 mb-8">Technical Skills</h3>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6 text-white">
          <li className="flex items-center space-x-2">
            <FaDatabase className="text-purple-500 text-2xl mr-2" />
            <span>MongoDB</span>
          </li>
          <li className="flex items-center space-x-2">
            <SiExpress className="text-cyan-500 text-2xl mr-2" />
            <span>Express</span>
          </li>
          <li className="flex items-center space-x-2">
          <FaReact className="text-cyan-500 text-2xl mr-2" />
            <span>React</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaNodeJs className="text-green-500 text-2xl mr-2" />
            <span>Node.js</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaBootstrap className="text-violet-500 text-2xl mr-2" />
            <span>Bootstrap</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaMobileAlt className="text-cyan-500 text-2xl mr-2" />
            <span>React Native</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaJsSquare className="text-yellow-500 text-2xl mr-2" />
            <span>JavaScript</span>
          </li>
          <li className="flex items-center space-x-2">
          <FaCss3Alt className="text-blue-500 text-2xl mr-2" />
            <span>CSS</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaHtml5 className="text-red-500 text-2xl mr-2" />
            <span>HTML</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaPython className="text-cyan-500 text-2xl mr-2" />
            <span>Python</span>
          </li>
        </ul>
        <h3 className="text-3xl font-semibold text-teal-400 mb-8 ">Languages</h3>
        <ul className="space-y-4 text-white">
          {Object.entries(proficiencyLevels).map(([language, percentage]) => (
            <li key={language} className="flex items-center space-x-4">
              <span className="text-2xl text-teal-400">{getLanguageFlag(language)}</span>
              <span className="flex-1">{language}</span>
              <div className="relative flex-1">
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <animated.div
                    className="bg-teal-400 h-full rounded-full"
                    style={getBarAnimation(percentage)}
                  />
                </div>
                <span className="absolute right-0 top-0 text-teal-400 text-xs font-medium transform translate-y-1.5 mt-2">{percentage}%</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center ">
          <a 
            href="/Anvarsha K N.pdf" 
            download="cv-Anvarsha K N.pdf"
            className="flex items-center justify-center text-white bg-teal-500 hover:bg-teal-600 px-6 py-3 rounded-lg shadow-md transition duration-300"
          >
            <span className="mr-2">Download CV</span>
            <FaDownload className="text-xl" />
          </a>
        </div>
      </div>
    // </div>
  );
};

export default About;
