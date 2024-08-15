import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white px-4">
      <h2 className="text-3xl font-semibold mb-12 mt-12">Contact Me</h2>
      <div className="flex flex-col space-y-6 max-w-lg w-full">
        <div className="flex items-center bg-gray-700 p-5 rounded-lg shadow-lg">
          <FaPhone className="text-teal-500 text-3xl mr-4" />
          <span className="text-lg font-medium">+971 528752392</span>
        </div>
        <div className="flex items-center bg-gray-700 p-5 rounded-lg shadow-lg">
          <FaEnvelope className="text-teal-500 text-3xl mr-4" />
          <a href="mailto:anvarshaknavas588@gmail.com" className="text-lg font-medium">anvarshaknavas588@gmail.com</a>
        </div>
        <div className="flex items-center bg-gray-700 p-5 rounded-lg shadow-lg">
          <FaLinkedin className="text-teal-500 text-3xl mr-4" />
          <a href="https://linkedin.com/in/anvarshakn" target="_blank" rel="noopener noreferrer" className="text-lg font-medium">LinkedIn</a>
        </div>
        <div className="flex items-center bg-gray-700 p-5 rounded-lg shadow-lg">
          <FaGithub className="text-teal-500 text-3xl mr-4" />
          <a href="https://github.com/anvar010" target="_blank" rel="noopener noreferrer" className="text-lg font-medium">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
