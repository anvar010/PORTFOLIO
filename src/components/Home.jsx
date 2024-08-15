import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white">
      <div className="flex flex-col md:flex-row items-center">
        {/* Profile Picture */}
        <div className="mb-6 md:mb-0 md:mr-10 hover:scale-105 transition-transform duration-300">
          <img 
            src="/img.jpg" 
            alt="Anvarsha K N - Web Developer" 
            className="rounded-full w-42 h-60 object-cover"
          />
        </div>

        {/* Profile Information */}
        <div>
          <h2 className="text-4xl font-bold hover:text-teal-400 transition-colors duration-300">I'm Anvarsha K N</h2>
          <h3 className="text-2xl font-bold mt-2 hover:text-teal-400 transition-colors duration-300">MERN Stack Web Developer</h3>
          <p className="text-gray-400 mt-4 max-w-md hover:text-gray-300 transition-colors duration-300">
            As a passionate web developer, I thrive on creating dynamic and user-friendly web applications.
            Skilled in MongoDB, Express.js, React.js, and Node.js, I am dedicated to solving complex problems and 
            delivering high-quality solutions that meet user needs.
          </p>
          <div className="flex mt-4 space-x-4">
            <a href="https://linkedin.com/in/anvarshakn" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-white transition duration-300">
              <FaLinkedin size={30} />
            </a>
            <a href="https://github.com/anvar010" target="_blank" rel="noopener noreferrer" className="text-teal-400 hover:text-white transition duration-300">
              <FaGithub size={30} />
            </a>
          </div>
        </div>
      </div>

      {/* Fixed position contact button */}
      <div className="fixed bottom-8 right-8">
        <a href="mailto:anvarshaknavas588@gmail.com" className="flex items-center text-black bg-teal-400 hover:bg-teal-500 p-4 rounded-full shadow-md transition duration-300">
          <FaEnvelope className="text-xl mr-2" /> Contact Me
        </a>
      </div>
    </div>
  );
}

export default Home;
