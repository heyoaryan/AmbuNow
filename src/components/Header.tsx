import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Activity } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/ambunowlogo.png" alt="AmbuNow Logo" className="w-12 h-12 object-contain drop-shadow-lg" />
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">AmbuNow</span>
              <div className="text-xs text-gray-500 font-medium">AI Emergency Response</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-red-600 transition-colors">How It Works</a>
            <a href="#impact" className="text-gray-700 hover:text-red-600 transition-colors">Impact</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
          </nav>

          {/* Emergency Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 animate-pulse">
              <Phone className="w-4 h-4 inline mr-2" />
              Emergency
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-3 px-4">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors">Home</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-red-600 transition-colors">How It Works</a>
              <a href="#impact" className="text-gray-700 hover:text-red-600 transition-colors">Impact</a>
              <a href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">Contact</a>
              <button className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold w-full">
                <Phone className="w-4 h-4 inline mr-2" />
                Emergency
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;