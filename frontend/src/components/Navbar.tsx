import { Link } from 'react-router-dom';
import { Briefcase, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-blue-600">
            <Briefcase className="w-8 h-8" />
            <span>SMART HIRE</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Jobs
            </Link>
            <Link to="/post-job" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Post Job
            </Link>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Login
            </button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link
              to="/"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Jobs
            </Link>
            <Link
              to="/post-job"
              className="block text-gray-700 hover:text-blue-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Post Job
            </Link>
            <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
