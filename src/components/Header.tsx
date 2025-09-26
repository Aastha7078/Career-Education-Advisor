import React, { useState } from 'react';
import { Menu, X, User, LogIn, Mountain } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
  user: any;
  setUser: (user: any) => void;
}

const Header: React.FC<HeaderProps> = ({ currentSection, onNavigate, user, setUser }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'aptitude', label: 'Aptitude Test', icon: '🧠' },
    { id: 'careers', label: 'Career Paths', icon: '🎯' },
    { id: 'colleges', label: 'Colleges', icon: '🏫' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    setUser({
      id: '1',
      name: 'Student User',
      email: 'student@example.com',
      class: '12th',
      interests: ['Science', 'Technology']
    });
    setShowLogin(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-lg border-b border-saffron-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-saffron-400 to-saffron-600 rounded-lg flex items-center justify-center">
              <Mountain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-kashmir-blue-800">J&K Career Advisor</h1>
              <p className="text-xs text-kashmir-blue-600">Smart Education Initiative</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                  currentSection === item.id
                    ? 'bg-saffron-100 text-saffron-700 shadow-md'
                    : 'text-kashmir-blue-700 hover:bg-kashmir-blue-50'
                }`}
              >
                <span>{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-mountain-green-400 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="hidden md:block text-sm font-medium text-kashmir-blue-700">
                  {user.name}
                </span>
              </div>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-saffron-500 text-white rounded-lg hover:bg-saffron-600 transition-colors"
              >
                <LogIn className="h-4 w-4" />
                <span>Login</span>
              </button>
            )}
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-kashmir-blue-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-saffron-200 animate-slideDown">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg mb-2 transition-all ${
                  currentSection === item.id
                    ? 'bg-saffron-100 text-saffron-700'
                    : 'text-kashmir-blue-700 hover:bg-kashmir-blue-50'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 animate-scaleIn">
            <h3 className="text-xl font-bold text-kashmir-blue-800 mb-4">Student Login</h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email or Student ID
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                  placeholder="Enter your email or student ID"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-transparent"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-saffron-500 text-white rounded-lg hover:bg-saffron-600 transition-colors"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;