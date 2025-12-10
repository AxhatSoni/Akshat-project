import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FaUser, FaSignOutAlt, FaBars, FaTimes, FaChevronDown, FaShieldAlt } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setShowUserMenu(false);
    setIsMobileMenuOpen(false);
  };

  // Smooth scroll to hero section
  const scrollToHero = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-xl' 
          : 'bg-white shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              className="group flex items-center space-x-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-50 group-hover: opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-primary to-accent text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg">
                  P
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-600 to-accent bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                Homely
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {/* Navigation Links */}
            <a 
              href="#projects" 
              onClick={handleNavClick}
              className="relative px-4 py-2 text-gray-700 font-semibold hover:text-primary transition-colors group"
            >
              <span className="relative z-10">Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <a 
              href="#clients" 
              onClick={handleNavClick}
              className="relative px-4 py-2 text-gray-700 font-semibold hover:text-primary transition-colors group"
            >
              <span className="relative z-10">Clients</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
            </a>
            
            <a 
              href="#hero" 
              onClick={scrollToHero}
              className="relative px-4 py-2 text-gray-700 font-semibold hover:text-primary transition-colors group"
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover: w-full transition-all duration-300"></span>
            </a>

            {/* User Section */}
            {user ?  (
              <div className="flex items-center space-x-3 ml-4">
                {/* Admin Panel Button */}
                {isAdmin() && (
                  <Link 
                    to="/admin" 
                    className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2. 5 rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <FaShieldAlt className="relative z-10" />
                    <span className="relative z-10">Admin Panel</span>
                  </Link>
                )}

                {/* User Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-3 px-4 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20"
                  >
                    <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold shadow-md">
                      {user.name. charAt(0).toUpperCase()}
                    </div>
                    <div className="text-left hidden xl:block">
                      <p className="text-sm font-semibold text-gray-800">{user.name}</p>
                      <p className="text-xs text-gray-500">
                        {isAdmin() ? 'Administrator' : 'User'}
                      </p>
                    </div>
                    <FaChevronDown 
                      className={`text-gray-500 transition-transform duration-300 ${
                        showUserMenu ?  'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {showUserMenu && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setShowUserMenu(false)}
                      ></div>
                      <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-20 animate-fadeIn">
                        <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 border-b border-gray-100">
                          <p className="font-bold text-gray-800">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 transition-colors font-semibold"
                        >
                          <FaSignOutAlt />
                          <span>Logout</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-8 py-2.5 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 overflow-hidden ml-4"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <FaUser className="relative z-10" />
                <span className="relative z-10">Login</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 text-gray-700" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3 bg-white border-t border-gray-100 shadow-xl">
          {/* Mobile Nav Links */}
          <a 
            href="#projects" 
            onClick={handleNavClick}
            className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 rounded-xl transition-colors"
          >
            Projects
          </a>
          
          <a 
            href="#clients" 
            onClick={handleNavClick}
            className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 rounded-xl transition-colors"
          >
            Clients
          </a>
          
          <a 
            href="#hero" 
            onClick={scrollToHero}
            className="block px-4 py-3 text-gray-700 font-semibold hover:bg-gray-50 rounded-xl transition-colors"
          >
            Contact
          </a>

          {/* Mobile User Section */}
          {user ? (
            <div className="space-y-3 pt-3 border-t border-gray-100">
              <div className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{user.name}</p>
                  <p className="text-sm text-gray-500">
                    {isAdmin() ? 'Administrator' : 'User'}
                  </p>
                </div>
              </div>

              {isAdmin() && (
                <Link 
                  to="/admin" 
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
                >
                  <FaShieldAlt />
                  <span>Admin Panel</span>
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors font-semibold"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <Link 
              to="/login" 
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
            >
              <FaUser />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;