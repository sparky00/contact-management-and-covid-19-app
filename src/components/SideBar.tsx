import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartLine, FaPhone } from 'react-icons/fa'; // Optional: import icons for a visual touch

const Sidebar: React.FC = () => {
  return (
    <div className="w-60 h-full bg-gray-800 text-white fixed left-0 top-0 bottom-0">
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Navigation</h2>
        <ul>
          <li className="mb-4">
            <Link to="/charts" className="flex items-center text-white hover:text-gray-400">
              <FaChartLine className="mr-2" />
              Charts / Maps
            </Link>
          </li>
          <li>
            <Link to="/" className="flex items-center text-white hover:text-gray-400">
              <FaPhone className="mr-2" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
