
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
              Gemini React Blog
            </Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <a href="#" className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-gray-500 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
