import React from 'react';
import { Link } from 'react-router-dom';
import { Speaker, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="floating-nav">
      <div className="glass-card">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Speaker className="h-8 w-8 text-indigo-400" />
                <span className="ml-2 text-white font-bold text-xl">Horn Calculator</span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md transition-colors">Home</Link>
                <Link to="/moss-calculator" className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md transition-colors">Moss Calculator</Link>
                <Link to="/sage-calculator" className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md transition-colors">Sage Pricing</Link>
                <Link to="/share-calculator" className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md transition-colors">Share Certificate</Link>
                <Link to="/about" className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md transition-colors">About</Link>
                <Link to="/contact" className="text-gray-300 hover:text-white hover:bg-gray-800/50 px-3 py-2 rounded-md transition-colors">Contact</Link>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t border-gray-700/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md hover:bg-gray-800/50">Home</Link>
              <Link to="/moss-calculator" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md hover:bg-gray-800/50">Moss Calculator</Link>
              <Link to="/sage-calculator" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md hover:bg-gray-800/50">Sage Pricing</Link>
              <Link to="/share-calculator" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md hover:bg-gray-800/50">Share Certificate</Link>
              <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md hover:bg-gray-800/50">About</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md hover:bg-gray-800/50">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;