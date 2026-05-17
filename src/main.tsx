import { Menu, X, Search, Bell, User } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="size-full bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Name */}
            <div className="flex items-center">
              <h1 className="text-2xl tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                weronika
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-slate-700 hover:text-purple-600 transition-colors duration-200">
                Home
              </a>
              <a href="#" className="text-slate-700 hover:text-purple-600 transition-colors duration-200">
                About
              </a>
              <a href="#" className="text-slate-700 hover:text-purple-600 transition-colors duration-200">
                Services
              </a>
              <a href="#" className="text-slate-700 hover:text-purple-600 transition-colors duration-200">
                Portfolio
              </a>
              <a href="#" className="text-slate-700 hover:text-purple-600 transition-colors duration-200">
                Contact
              </a>
            </div>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200">
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-purple-100">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-200">
                Home
              </a>
              <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-200">
                About
              </a>
              <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-200">
                Services
              </a>
              <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-200">
                Portfolio
              </a>
              <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-all duration-200">
                Contact
              </a>
              <div className="flex items-center justify-around pt-4 border-t border-purple-100">
                <button className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200">
                  <Search className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-slate-600 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Content Area */}
      <div className="flex items-center justify-center h-[calc(100vh-4rem)] px-4">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Welcome to Weronika
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A modern and elegant experience designed with care
          </p>
        </div>
      </div>
    </div>
  );
}