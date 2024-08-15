import React from 'react';
import { FaCode, FaUsers, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';

function WorkExperience() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white bg-gradient-to-r from-gray-900 via-black to-gray-900 px-8">
      <h2 className="text-4xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-6 max-w-4xl w-full sm:w-3/4 lg:w-1/2">
        <div className="lg:text-left">
          <h3 className="text-2xl font-bold">Front End Developer - Rawmax Media</h3>
          <p className="text-gray-400 mt-2">
            <strong>Duration:</strong> 05/07/2023 – 06/07/2024
          </p>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li className="flex items-center">
              <FaCode className="text-teal-500 mr-2" />
              Designed and implemented user-friendly interfaces.
            </li>
            <li className="flex items-center">
              <FaUsers className="text-teal-500 mr-2" />
              Ensured cross-browser compatibility and seamless user experience.
            </li>
            <li className="flex items-center">
              <FaMobileAlt className="text-teal-500 mr-2" />
              Developed mobile-responsive designs for enhanced accessibility.
            </li>
          </ul>
        </div>
        <div className="lg:text-left">
          <h3 className="text-2xl font-bold">MERN Stack Web Developer (Intern) - Synnefo Solutions</h3>
          <p className="text-gray-400 mt-2">
            <strong>Duration:</strong> 14/02/2024 – 14/03/2024
          </p>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li className="flex items-center">
              <FaLayerGroup className="text-teal-500 mr-2" />
              Developed an e-commerce platform using the MERN stack.
            </li>
            <li className="flex items-center">
              <FaUsers className="text-teal-500 mr-2" />
              Focused on responsive UI and user registration functionalities.
            </li>
            <li className="flex items-center">
              <FaCode className="text-teal-500 mr-2" />
              Integrated product catalog and payment systems.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
