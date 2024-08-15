import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function Projects() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white bg-gradient-to-r from-gray-900 via-black to-gray-900">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="space-y-6 max-w-4xl w-full sm:w-3/4 lg:w-1/2">
        <div className="lg:text-left">
          <h3 className="text-2xl font-bold">E-Commerce Platform</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Developed an e-commerce platform using MERN Stack fundamentals.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Features include user registration, product catalog, and payment gateway integration.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Focused on creating a user-friendly and responsive UI.
            </li>
          </ul>
        </div>
        <div className="lg:text-left">
          <h3 className="text-2xl font-bold">Driver Drowsiness Detection System Using IoT</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Conceptualized a system to tackle road accidents caused by driver fatigue.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Programmed to detect driver fatigue and respond in a predefined procedure using IoT.
            </li>
          </ul>
        </div>
        <div className="lg:text-left">
          <h3 className="text-2xl font-bold">Tracking Pedagogue Appearance Methodology</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Developed a robust system to track attendance and punctuality in real-time.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Enhanced accountability through face recognition.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Utilized PHP, XAMP, HTML, CSS, JS, MySQL, and Python for implementation.
            </li>
          </ul>
        </div>
       
        <div className="lg:text-left">
          <h3 className="text-2xl font-bold">Responsive Web Development</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Designed and implemented user-friendly interfaces.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Ensured a seamless user experience across various devices and platforms.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="mr-2" />
              Utilized HTML, CSS, JavaScript, and frameworks like React.js to develop responsive and dynamic web pages.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
